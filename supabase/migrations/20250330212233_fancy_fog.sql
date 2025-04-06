/*
  # Fix roles access and policies

  1. Changes
    - Make roles publicly readable without authentication
    - Add proper RLS policies
    - Ensure roles table exists with proper structure
*/

-- Create roles table if it doesn't exist
CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Insert default roles
INSERT INTO roles (name, description) VALUES
  ('walker', 'Utilisateur marcheur'),
  ('driver', 'Conducteur'),
  ('double_role', 'Conducteur et marcheur')
ON CONFLICT (name) DO NOTHING;

-- Enable RLS
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Public can read roles" ON roles;
DROP POLICY IF EXISTS "Anyone can read roles" ON roles;

-- Create new public access policy
CREATE POLICY "Public can read roles"
  ON roles
  FOR SELECT
  TO PUBLIC
  USING (true);