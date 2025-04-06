/*
  # Add Location Validation for Routes

  1. Changes
    - Add check constraints for start_location and end_location
    - Ensure province and commune fields are present in location JSON
    - Validate that locations are properly formatted JSON objects
*/

-- Add check constraints for start_location
ALTER TABLE routes 
  ADD CONSTRAINT routes_start_location_check 
  CHECK (
    start_location ? 'province' 
    AND start_location->>'province' IS NOT NULL
    AND jsonb_typeof(start_location) = 'object'
  );

-- Add check constraints for end_location
ALTER TABLE routes 
  ADD CONSTRAINT routes_end_location_check 
  CHECK (
    end_location ? 'province'
    AND end_location->>'province' IS NOT NULL 
    AND jsonb_typeof(end_location) = 'object'
  );

-- Create function to validate locations against provinces table
CREATE OR REPLACE FUNCTION validate_route_locations()
RETURNS trigger AS $$
BEGIN
  -- Validate province exists
  IF NOT EXISTS (
    SELECT 1 FROM provinces 
    WHERE id = (NEW.start_location->>'province')::uuid
  ) THEN
    RAISE EXCEPTION 'Invalid start province';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM provinces 
    WHERE id = (NEW.end_location->>'province')::uuid
  ) THEN
    RAISE EXCEPTION 'Invalid end province';
  END IF;

  -- Validate commune if provided
  IF (NEW.start_location->>'commune') IS NOT NULL THEN
    IF NOT EXISTS (
      SELECT 1 FROM communes 
      WHERE id = (NEW.start_location->>'commune')::uuid
      AND province_id = (NEW.start_location->>'province')::uuid
    ) THEN
      RAISE EXCEPTION 'Invalid start commune';
    END IF;
  END IF;

  IF (NEW.end_location->>'commune') IS NOT NULL THEN
    IF NOT EXISTS (
      SELECT 1 FROM communes 
      WHERE id = (NEW.end_location->>'commune')::uuid
      AND province_id = (NEW.end_location->>'province')::uuid
    ) THEN
      RAISE EXCEPTION 'Invalid end commune';
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for location validation
DROP TRIGGER IF EXISTS validate_route_locations_trigger ON routes;
CREATE TRIGGER validate_route_locations_trigger
  BEFORE INSERT OR UPDATE ON routes
  FOR EACH ROW
  EXECUTE FUNCTION validate_route_locations();