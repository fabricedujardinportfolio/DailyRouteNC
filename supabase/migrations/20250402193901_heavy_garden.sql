/*
  # Add Token Balance and Booking System

  1. Changes
    - Add token_balance to profiles table
    - Add minimum_tokens to routes table
    - Add function to check token balance
    - Add function to handle booking transaction
*/

-- Add token_balance to profiles
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS token_balance integer NOT NULL DEFAULT 0;

-- Add minimum_tokens to routes
ALTER TABLE routes
ADD COLUMN IF NOT EXISTS minimum_tokens integer NOT NULL DEFAULT 1
CHECK (minimum_tokens > 0);

-- Function to check if user has enough tokens
CREATE OR REPLACE FUNCTION check_token_balance(user_id uuid, required_tokens integer)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_balance integer;
BEGIN
  SELECT token_balance INTO current_balance
  FROM profiles
  WHERE id = user_id;
  
  RETURN COALESCE(current_balance >= required_tokens, false);
END;
$$;

-- Function to handle booking transaction
CREATE OR REPLACE FUNCTION create_booking(
  p_user_id uuid,
  p_route_id uuid,
  p_tokens_used integer
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_booking_id uuid;
  v_available_seats integer;
  v_driver_id uuid;
BEGIN
  -- Check if route exists and has available seats
  SELECT available_seats, driver_id INTO v_available_seats, v_driver_id
  FROM routes
  WHERE id = p_route_id AND status = 'active';
  
  IF v_available_seats IS NULL OR v_available_seats < 1 THEN
    RAISE EXCEPTION 'Route not available';
  END IF;

  -- Check if user has enough tokens
  IF NOT check_token_balance(p_user_id, p_tokens_used) THEN
    RAISE EXCEPTION 'Insufficient tokens';
  END IF;

  -- Start transaction
  BEGIN
    -- Create booking
    INSERT INTO bookings (route_id, user_id, tokens_used, status)
    VALUES (p_route_id, p_user_id, p_tokens_used, 'pending')
    RETURNING id INTO v_booking_id;

    -- Deduct tokens from user
    UPDATE profiles
    SET token_balance = token_balance - p_tokens_used
    WHERE id = p_user_id;

    -- Create token transaction record
    INSERT INTO token_transactions (
      user_id,
      amount,
      type,
      description
    ) VALUES (
      p_user_id,
      -p_tokens_used,
      'booking',
      'Booking for route ' || p_route_id
    );

    -- Update available seats
    UPDATE routes
    SET available_seats = available_seats - 1
    WHERE id = p_route_id;

    -- Create activity record
    INSERT INTO activities (
      user_id,
      type,
      description
    ) VALUES (
      p_user_id,
      'booking',
      'Booked route ' || p_route_id
    );

    RETURN v_booking_id;
  EXCEPTION
    WHEN OTHERS THEN
      RAISE;
  END;
END;
$$;