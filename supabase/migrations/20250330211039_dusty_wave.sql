/*
  # Initial Schema for DailyRouteNC

  1. Tables
    - roles: User roles (walker, driver, etc.)
    - user_roles: Link between users and roles
    - provinces: Provinces of New Caledonia
    - communes: Cities by province
    - quartiers: Districts by city

  2. Security
    - RLS enabled where needed
    - Public access for reference data
*/

-- Create roles table
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

-- Enable RLS and create policy for roles
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read roles"
  ON roles
  FOR SELECT
  TO PUBLIC
  USING (true);

-- Create user_roles table
CREATE TABLE IF NOT EXISTS user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  role_id uuid REFERENCES roles(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, role_id)
);

-- Enable RLS and create policies for user_roles
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own role"
  ON user_roles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own role"
  ON user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all rows"
  ON user_roles
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create provinces table
CREATE TABLE IF NOT EXISTS provinces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create communes table
CREATE TABLE IF NOT EXISTS communes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  province_id uuid REFERENCES provinces(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, province_id)
);

-- Create quartiers table
CREATE TABLE IF NOT EXISTS quartiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  commune_id uuid REFERENCES communes(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, commune_id)
);