/*
  # Fix Route Policies

  1. Changes
    - Drop existing policies
    - Add proper UPDATE policy for route cancellation
    - Drop and recreate SELECT policy for viewing active routes
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Les conducteurs peuvent modifier leurs trajets" ON routes;
DROP POLICY IF EXISTS "Les conducteurs peuvent supprimer leurs trajets" ON routes;
DROP POLICY IF EXISTS "Tout le monde peut voir les trajets actifs" ON routes;

-- Create new policies
CREATE POLICY "Les conducteurs peuvent modifier leurs trajets actifs"
  ON routes 
  FOR UPDATE
  TO authenticated
  USING (
    auth.uid() = driver_id 
    AND status = 'active'
  )
  WITH CHECK (
    auth.uid() = driver_id 
    AND status IN ('active', 'cancelled')
  );

CREATE POLICY "Tout le monde peut voir les trajets actifs"
  ON routes 
  FOR SELECT
  TO authenticated
  USING (status = 'active');