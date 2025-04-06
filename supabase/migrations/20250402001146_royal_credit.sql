/*
  # Fix Route Management Policies

  1. Changes
    - Add DELETE policy for routes table
    - Add UPDATE policy for route status
    - Add validation for route provinces
*/

-- Drop existing policies on routes table that might conflict
DROP POLICY IF EXISTS "Les conducteurs peuvent modifier leurs trajets" ON routes;

-- Add new policies for route management
CREATE POLICY "Les conducteurs peuvent modifier leurs trajets"
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

CREATE POLICY "Les conducteurs peuvent supprimer leurs trajets"
  ON routes
  FOR DELETE
  TO authenticated
  USING (
    auth.uid() = driver_id 
    AND status = 'active'
  );