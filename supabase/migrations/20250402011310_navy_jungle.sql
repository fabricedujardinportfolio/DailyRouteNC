/*
  # Setup Routes Table Policies

  1. Changes
    - Disable then re-enable RLS
    - Drop all existing policies
    - Create new policies for INSERT, UPDATE, and SELECT
*/

-- First disable RLS to clean up
ALTER TABLE routes DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Les conducteurs peuvent créer leurs trajets" ON routes;
DROP POLICY IF EXISTS "Les conducteurs peuvent modifier leurs trajets actifs" ON routes;
DROP POLICY IF EXISTS "Tout le monde peut voir les trajets actifs" ON routes;

-- Re-enable RLS
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;

-- Create INSERT policy
CREATE POLICY "Les conducteurs peuvent créer leurs trajets"
  ON routes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = driver_id);

-- Create UPDATE policy
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

-- Create SELECT policy
CREATE POLICY "Tout le monde peut voir les trajets actifs"
  ON routes
  FOR SELECT
  TO authenticated
  USING (status = 'active');