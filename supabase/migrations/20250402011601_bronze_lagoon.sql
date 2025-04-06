/*
  # Add Delete Policy for Routes

  1. Changes
    - Add DELETE policy to allow users to delete their own routes
*/

-- Create DELETE policy
CREATE POLICY "Les conducteurs peuvent supprimer leurs trajets"
  ON routes
  FOR DELETE 
  TO authenticated
  USING (auth.uid() = driver_id);