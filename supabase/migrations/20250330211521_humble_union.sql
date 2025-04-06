/*
  # Initial Schema for DailyRouteNC

  1. Tables
    - roles: User roles (walker, driver, etc.)
    - user_roles: Link between users and roles
    - provinces: Provinces of New Caledonia
    - communes: Cities by province
    - quartiers: Districts by city
    - routes: Routes/trips
    - bookings: Trip bookings
    - ratings: User ratings
    - token_transactions: Token transaction history

  2. Security
    - RLS enabled on all tables
    - Appropriate policies for each table
*/

-- Roles and User Roles
CREATE TABLE roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

INSERT INTO roles (name, description) VALUES
  ('walker', 'Utilisateur marcheur'),
  ('driver', 'Conducteur'),
  ('double_role', 'Conducteur et marcheur')
ON CONFLICT (name) DO NOTHING;

ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read roles"
  ON roles FOR SELECT
  TO PUBLIC
  USING (true);

CREATE TABLE user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  role_id uuid REFERENCES roles(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, role_id)
);

ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own role"
  ON user_roles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own role"
  ON user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all rows"
  ON user_roles
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Geographic Data
CREATE TABLE provinces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE communes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  province_id uuid REFERENCES provinces(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, province_id)
);

CREATE TABLE quartiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  commune_id uuid REFERENCES communes(id) NOT NULL,
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

-- Insert Quartiers for Nouméa
DO $$
DECLARE
  v_noumea_id uuid;
BEGIN
  SELECT id INTO v_noumea_id FROM communes WHERE name = 'Nouméa';

  INSERT INTO quartiers (name, commune_id) VALUES
    ('Vallée des Colons', v_noumea_id),
    ('Faubourg Blanchot', v_noumea_id),
    ('Quartier Latin', v_noumea_id),
    ('Centre Ville', v_noumea_id),
    ('Vallée du Tir', v_noumea_id),
    ('Montravel', v_noumea_id),
    ('Rivière Salée', v_noumea_id),
    ('Tina', v_noumea_id),
    ('Magenta', v_noumea_id),
    ('Aérodrome', v_noumea_id),
    ('Anse Vata', v_noumea_id),
    ('Baie des Citrons', v_noumea_id),
    ('Motor Pool', v_noumea_id),
    ('Receiving', v_noumea_id),
    ('Artillerie', v_noumea_id),
    ('Orphelinat', v_noumea_id),
    ('N''Géa', v_noumea_id),
    ('Ouémo', v_noumea_id),
    ('Portes de Fer', v_noumea_id),
    ('Haut-Magenta', v_noumea_id),
    ('PK4', v_noumea_id),
    ('PK6', v_noumea_id),
    ('PK7', v_noumea_id)
  ON CONFLICT (name, commune_id) DO NOTHING;
END $$;

-- Insert Quartiers for Mont-Dore
DO $$
DECLARE
  v_montdore_id uuid;
BEGIN
  SELECT id INTO v_montdore_id FROM communes WHERE name = 'Mont-Dore';

  INSERT INTO quartiers (name, commune_id) VALUES
    ('Yahoué', v_montdore_id),
    ('Robinson', v_montdore_id),
    ('Boulari', v_montdore_id),
    ('Saint-Michel', v_montdore_id),
    ('La Coulée', v_montdore_id),
    ('Plum', v_montdore_id),
    ('Saint-Louis', v_montdore_id),
    ('Pont-des-Français', v_montdore_id),
    ('La Conception', v_montdore_id)
  ON CONFLICT (name, commune_id) DO NOTHING;
END $$;

-- Insert Quartiers for Dumbéa
DO $$
DECLARE
  v_dumbea_id uuid;
BEGIN
  SELECT id INTO v_dumbea_id FROM communes WHERE name = 'Dumbéa';

  INSERT INTO quartiers (name, commune_id) VALUES
    ('Koutio', v_dumbea_id),
    ('Auteuil', v_dumbea_id),
    ('Dumbéa-sur-mer', v_dumbea_id),
    ('Normandie', v_dumbea_id),
    ('ZAC Panda', v_dumbea_id),
    ('Val Suzon', v_dumbea_id),
    ('Koé', v_dumbea_id),
    ('Dumbéa Centre', v_dumbea_id),
    ('ZI Ducos', v_dumbea_id)
  ON CONFLICT (name, commune_id) DO NOTHING;
END $$;

-- Routes Table
CREATE TABLE routes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES auth.users(id) NOT NULL,
  start_location jsonb NOT NULL,
  end_location jsonb NOT NULL,
  departure_time timestamptz NOT NULL,
  available_seats int NOT NULL CHECK (available_seats >= 0),
  price int NOT NULL CHECK (price >= 0),
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'completed')) DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les conducteurs peuvent créer leurs trajets"
  ON routes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = driver_id);

CREATE POLICY "Tout le monde peut voir les trajets actifs"
  ON routes FOR SELECT
  TO authenticated
  USING (status = 'active');

CREATE POLICY "Les conducteurs peuvent modifier leurs trajets"
  ON routes FOR UPDATE
  TO authenticated
  USING (auth.uid() = driver_id);

-- Bookings Table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id uuid REFERENCES routes(id) NOT NULL,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
  tokens_used int NOT NULL CHECK (tokens_used > 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent créer leurs réservations"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent voir leurs réservations"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() IN (
    SELECT driver_id FROM routes WHERE id = route_id
  ));

-- Ratings Table
CREATE TABLE ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id uuid REFERENCES routes(id) NOT NULL,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  rating int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(route_id, user_id)
);

ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent créer leurs évaluations"
  ON ratings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Tout le monde peut voir les évaluations"
  ON ratings FOR SELECT
  TO authenticated
  USING (true);

-- Token Transactions Table
CREATE TABLE token_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  amount int NOT NULL,
  type text NOT NULL CHECK (type IN ('purchase', 'booking', 'refund')),
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE token_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent voir leurs transactions"
  ON token_transactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes
CREATE INDEX routes_driver_id_idx ON routes(driver_id);
CREATE INDEX routes_status_idx ON routes(status);
CREATE INDEX bookings_route_id_idx ON bookings(route_id);
CREATE INDEX bookings_user_id_idx ON bookings(user_id);
CREATE INDEX ratings_route_id_idx ON ratings(route_id);
CREATE INDEX token_transactions_user_id_idx ON token_transactions(user_id);