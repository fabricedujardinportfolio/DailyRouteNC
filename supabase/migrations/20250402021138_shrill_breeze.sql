/*
  # Fix Delete Policy for Routes

  1. Changes
    - Drop existing delete policy if it exists
    - Recreate delete policy to ensure correct configuration
*/

-- Drop existing policy if it exists
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Les conducteurs peuvent supprimer leurs trajets" ON routes;
END $$;

-- Create DELETE policy
CREATE POLICY "Les conducteurs peuvent supprimer leurs trajets"
  ON routes
  FOR DELETE 
  TO authenticated
  USING (auth.uid() = driver_id);