/*
  # Fix Routes Foreign Key Relationship

  1. Changes
    - Add explicit foreign key relationship between routes and auth.users
    - Update existing foreign key name to match Supabase's convention
*/

-- First drop the existing foreign key if it exists
ALTER TABLE routes 
DROP CONSTRAINT IF EXISTS routes_driver_id_fkey;

-- Re-create the foreign key with the correct reference
ALTER TABLE routes
ADD CONSTRAINT routes_driver_id_fkey 
FOREIGN KEY (driver_id) 
REFERENCES auth.users(id)
ON DELETE CASCADE;