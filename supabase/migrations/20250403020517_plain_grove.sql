/*
  # Update Booking System with Token Transfer

  1. Changes
    - Add function to handle token transfer during booking
    - Update create_booking function to include token transfer
    - Add escrow system for pending bookings
*/

-- Add escrow_balance to profiles table
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS escrow_balance integer NOT NULL DEFAULT 0;

-- Function to handle token transfer
CREATE OR REPLACE FUNCTION transfer_tokens(
  p_from_user_id uuid,
  p_to_user_id uuid,
  p_amount integer,
  p_description text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if sender has enough tokens
  IF NOT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = p_from_user_id
    AND token_balance >= p_amount
  ) THEN
    RETURN false;
  END IF;

  -- Update sender's balance
  UPDATE profiles
  SET token_balance = token_balance - p_amount
  WHERE id = p_from_user_id;

  -- Update receiver's balance
  UPDATE profiles
  SET token_balance = token_balance + p_amount
  WHERE id = p_to_user_id;

  -- Create transaction records
  INSERT INTO token_transactions (user_id, amount, type, description)
  VALUES
    (p_from_user_id, -p_amount, 'booking', p_description),
    (p_to_user_id, p_amount, 'booking', p_description);

  RETURN true;
END;
$$;

-- Update create_booking function to handle token transfer
CREATE OR REPLACE FUNCTION create_booking(
  p_user_id uuid,
  p_route_id uuid,
  p_tokens_used integer
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_booking_id uuid;
  v_available_seats integer;
  v_driver_id uuid;
  v_route_status text;
BEGIN
  -- Get route details
  SELECT available_seats, driver_id, status
  INTO v_available_seats, v_driver_id, v_route_status
  FROM routes
  WHERE id = p_route_id;
  
  -- Validate route
  IF v_available_seats IS NULL OR v_route_status != 'active' THEN
    RAISE EXCEPTION 'Route not available';
  END IF;

  IF v_available_seats < 1 THEN
    RAISE EXCEPTION 'No seats available';
  END IF;

  -- Check if user has enough tokens
  IF NOT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = p_user_id
    AND token_balance >= p_tokens_used
  ) THEN
    RAISE EXCEPTION 'Insufficient tokens';
  END IF;

  -- Move tokens to escrow
  UPDATE profiles
  SET 
    token_balance = token_balance - p_tokens_used,
    escrow_balance = escrow_balance + p_tokens_used
  WHERE id = p_user_id;

  -- Create booking
  INSERT INTO bookings (route_id, user_id, tokens_used, status)
  VALUES (p_route_id, p_user_id, p_tokens_used, 'pending')
  RETURNING id INTO v_booking_id;

  -- Update available seats
  UPDATE routes
  SET available_seats = available_seats - 1
  WHERE id = p_route_id;

  -- Create activity records
  INSERT INTO activities (user_id, type, description)
  VALUES
    (p_user_id, 'booking', 'Réservation du trajet ' || p_route_id),
    (v_driver_id, 'booking', 'Nouvelle réservation reçue pour le trajet ' || p_route_id);

  -- Create token transaction record for escrow
  INSERT INTO token_transactions (
    user_id,
    amount,
    type,
    description
  ) VALUES (
    p_user_id,
    -p_tokens_used,
    'booking',
    'Mise en attente des jetons pour la réservation ' || v_booking_id
  );

  RETURN v_booking_id;
END;
$$;

-- Function to confirm booking and transfer tokens
CREATE OR REPLACE FUNCTION confirm_booking(
  p_booking_id uuid,
  p_driver_id uuid
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id uuid;
  v_tokens_used integer;
  v_route_id uuid;
BEGIN
  -- Get booking details
  SELECT user_id, tokens_used, route_id
  INTO v_user_id, v_tokens_used, v_route_id
  FROM bookings
  WHERE id = p_booking_id
  AND status = 'pending';

  IF NOT FOUND THEN
    RETURN false;
  END IF;

  -- Verify driver owns the route
  IF NOT EXISTS (
    SELECT 1 FROM routes
    WHERE id = v_route_id
    AND driver_id = p_driver_id
  ) THEN
    RETURN false;
  END IF;

  -- Move tokens from escrow to driver
  UPDATE profiles
  SET 
    escrow_balance = escrow_balance - v_tokens_used
  WHERE id = v_user_id;

  UPDATE profiles
  SET 
    token_balance = token_balance + v_tokens_used
  WHERE id = p_driver_id;

  -- Update booking status
  UPDATE bookings
  SET status = 'confirmed'
  WHERE id = p_booking_id;

  -- Create token transaction records
  INSERT INTO token_transactions (
    user_id,
    amount,
    type,
    description
  ) VALUES
    (v_user_id, -v_tokens_used, 'booking', 'Paiement confirmé pour la réservation ' || p_booking_id),
    (p_driver_id, v_tokens_used, 'booking', 'Paiement reçu pour la réservation ' || p_booking_id);

  -- Create activity records
  INSERT INTO activities (
    user_id,
    type,
    description
  ) VALUES
    (v_user_id, 'booking', 'Réservation ' || p_booking_id || ' confirmée'),
    (p_driver_id, 'booking', 'Réservation ' || p_booking_id || ' acceptée');

  RETURN true;
END;
$$;

-- Function to cancel booking and refund tokens
CREATE OR REPLACE FUNCTION cancel_booking(
  p_booking_id uuid,
  p_user_id uuid
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_tokens_used integer;
  v_route_id uuid;
  v_driver_id uuid;
BEGIN
  -- Get booking details
  SELECT b.tokens_used, b.route_id, r.driver_id
  INTO v_tokens_used, v_route_id, v_driver_id
  FROM bookings b
  JOIN routes r ON r.id = b.route_id
  WHERE b.id = p_booking_id
  AND b.status = 'pending'
  AND (b.user_id = p_user_id OR r.driver_id = p_user_id);

  IF NOT FOUND THEN
    RETURN false;
  END IF;

  -- Return tokens from escrow to user
  UPDATE profiles
  SET 
    escrow_balance = escrow_balance - v_tokens_used,
    token_balance = token_balance + v_tokens_used
  WHERE id = p_user_id;

  -- Update booking status
  UPDATE bookings
  SET status = 'cancelled'
  WHERE id = p_booking_id;

  -- Increment available seats
  UPDATE routes
  SET available_seats = available_seats + 1
  WHERE id = v_route_id;

  -- Create token transaction record
  INSERT INTO token_transactions (
    user_id,
    amount,
    type,
    description
  ) VALUES (
    p_user_id,
    v_tokens_used,
    'refund',
    'Remboursement pour la réservation ' || p_booking_id || ' annulée'
  );

  -- Create activity records
  INSERT INTO activities (
    user_id,
    type,
    description
  ) VALUES
    (p_user_id, 'booking', 'Réservation ' || p_booking_id || ' annulée'),
    (v_driver_id, 'booking', 'Réservation ' || p_booking_id || ' annulée');

  RETURN true;
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION transfer_tokens(uuid, uuid, integer, text) TO authenticated;
GRANT EXECUTE ON FUNCTION confirm_booking(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION cancel_booking(uuid, uuid) TO authenticated;