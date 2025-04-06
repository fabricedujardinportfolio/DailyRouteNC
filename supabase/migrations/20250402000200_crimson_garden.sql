/*
  # Initial Schema for DailyRouteNC

  1. Tables
    - roles: User roles (walker, driver, etc.)
    - user_roles: Link between users and roles
    - provinces: Provinces of New Caledonia
    - communes: Cities by province
    - quartiers: Districts by city
    - profiles: User profiles
    - routes: Routes/trips
    - bookings: Trip bookings
    - ratings: User ratings
    - token_transactions: Token transaction history
    - activities: User activities
*/

-- Roles Table
CREATE TABLE roles (
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

-- Disable RLS for roles table
ALTER TABLE roles DISABLE ROW LEVEL SECURITY;

-- User Roles Table
CREATE TABLE user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role_id uuid REFERENCES roles(id) ON DELETE RESTRICT NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own role"
  ON user_roles
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can read roles"
  ON user_roles
  FOR SELECT
  TO authenticated
  USING (true);

-- Geographic Data
CREATE TABLE provinces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE communes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  province_id uuid REFERENCES provinces(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, province_id)
);

CREATE TABLE quartiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  commune_id uuid REFERENCES communes(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, commune_id)
);

-- Insert Provinces
INSERT INTO provinces (name) VALUES
  ('Province Sud'),
  ('Province Nord'),
  ('Province des Îles')
ON CONFLICT (name) DO NOTHING;

-- Insert Communes
DO $$
DECLARE
  v_province_sud uuid;
  v_province_nord uuid;
  v_province_iles uuid;
BEGIN
  SELECT id INTO v_province_sud FROM provinces WHERE name = 'Province Sud';
  SELECT id INTO v_province_nord FROM provinces WHERE name = 'Province Nord';
  SELECT id INTO v_province_iles FROM provinces WHERE name = 'Province des Îles';

  -- Communes for Province Sud
  INSERT INTO communes (name, province_id) VALUES
    ('Nouméa', v_province_sud),
    ('Mont-Dore', v_province_sud),
    ('Dumbéa', v_province_sud),
    ('Païta', v_province_sud),
    ('Yaté', v_province_sud),
    ('Boulouparis', v_province_sud),
    ('La Foa', v_province_sud),
    ('Sarraméa', v_province_sud),
    ('Farino', v_province_sud),
    ('Moindou', v_province_sud),
    ('Bourail', v_province_sud),
    ('Thio', v_province_sud)
  ON CONFLICT (name, province_id) DO NOTHING;

  -- Communes for Province Nord
  INSERT INTO communes (name, province_id) VALUES
    ('Poya', v_province_nord),
    ('Pouembout', v_province_nord),
    ('Koné', v_province_nord),
    ('Voh', v_province_nord),
    ('Kaala-Gomen', v_province_nord),
    ('Koumac', v_province_nord),
    ('Poum', v_province_nord),
    ('Belep', v_province_nord),
    ('Ouégoa', v_province_nord),
    ('Pouébo', v_province_nord),
    ('Hienghène', v_province_nord),
    ('Touho', v_province_nord),
    ('Poindimié', v_province_nord),
    ('Ponérihouen', v_province_nord),
    ('Houaïlou', v_province_nord),
    ('Canala', v_province_nord),
    ('Kouaoua', v_province_nord)
  ON CONFLICT (name, province_id) DO NOTHING;

  -- Communes for Province des Îles
  INSERT INTO communes (name, province_id) VALUES
    ('Lifou', v_province_iles),
    ('Maré', v_province_iles),
    ('Ouvéa', v_province_iles),
    ('Île des Pins', v_province_iles)
  ON CONFLICT (name, province_id) DO NOTHING;
END $$;