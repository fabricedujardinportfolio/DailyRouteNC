/*
  # Improve Routes and Bookings Structure

  1. Changes
    - Add route_bookings view for easier querying
    - Add function to get route details with bookings
    - Update booking policies
*/

-- Create a view to join routes with bookings and user info
CREATE OR REPLACE VIEW route_bookings AS
SELECT 
  r.id AS route_id,
  r.driver_id,
  r.start_location,
  r.end_location,
  r.departure_time,
  r.estimated_arrival_time,
  r.available_seats,
  r.price,
  r.minimum_tokens,
  r.status,
  b.id AS booking_id,
  b.user_id AS passenger_id,
  b.status AS booking_status,
  b.created_at AS booking_created_at,
  p.name AS passenger_name,
  COUNT(b.id) OVER (PARTITION BY r.id) AS total_bookings
FROM routes r
LEFT JOIN bookings b ON b.route_id = r.id
LEFT JOIN profiles p ON p.id = b.user_id;

-- Grant access to the view
GRANT SELECT ON route_bookings TO authenticated;

-- Function to get route details with bookings
CREATE OR REPLACE FUNCTION get_route_details(p_route_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_result jsonb;
BEGIN
  SELECT jsonb_build_object(
    'route', jsonb_build_object(
      'id', r.id,
      'driver_id', r.driver_id,
      'start_location', r.start_location,
      'end_location', r.end_location,
      'departure_time', r.departure_time,
      'estimated_arrival_time', r.estimated_arrival_time,
      'available_seats', r.available_seats,
      'price', r.price,
      'minimum_tokens', r.minimum_tokens,
      'status', r.status
    ),
    'bookings', COALESCE(
      jsonb_agg(
        jsonb_build_object(
          'id', b.id,
          'user_id', b.user_id,
          'status', b.status,
          'created_at', b.created_at,
          'passenger_name', p.name
        )
      ) FILTER (WHERE b.id IS NOT NULL),
      '[]'::jsonb
    ),
    'total_bookings', COUNT(b.id)
  ) INTO v_result
  FROM routes r
  LEFT JOIN bookings b ON b.route_id = r.id
  LEFT JOIN profiles p ON p.id = b.user_id
  WHERE r.id = p_route_id
  GROUP BY r.id;

  RETURN v_result;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_route_details(uuid) TO authenticated;

-- Update booking policies to allow drivers to see their route bookings
DROP POLICY IF EXISTS "Les utilisateurs peuvent voir leurs réservations" ON bookings;

CREATE POLICY "Les utilisateurs peuvent voir leurs réservations"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id 
    OR 
    auth.uid() IN (
      SELECT driver_id 
      FROM routes 
      WHERE id = route_id
    )
  );