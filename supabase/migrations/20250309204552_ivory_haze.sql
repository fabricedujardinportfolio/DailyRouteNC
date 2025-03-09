/*
  # Schéma initial pour DailyRouteNC

  1. Nouvelles Tables
    - `routes` : Stocke les informations sur les trajets
      - `id` (uuid, clé primaire)
      - `driver_id` (uuid, référence vers auth.users)
      - `start_location` (jsonb)
      - `end_location` (jsonb)
      - `departure_time` (timestamptz)
      - `available_seats` (int)
      - `price` (int)
      - `status` (text)
      - `created_at` (timestamptz)
      
    - `bookings` : Gère les réservations
      - `id` (uuid, clé primaire)
      - `route_id` (uuid, référence vers routes)
      - `user_id` (uuid, référence vers auth.users)
      - `status` (text)
      - `tokens_used` (int)
      - `created_at` (timestamptz)

    - `ratings` : Système d'évaluation
      - `id` (uuid, clé primaire)
      - `route_id` (uuid, référence vers routes)
      - `user_id` (uuid, référence vers auth.users)
      - `rating` (int)
      - `comment` (text)
      - `created_at` (timestamptz)

    - `token_transactions` : Historique des transactions de jetons
      - `id` (uuid, clé primaire)
      - `user_id` (uuid, référence vers auth.users)
      - `amount` (int)
      - `type` (text)
      - `description` (text)
      - `created_at` (timestamptz)

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques d'accès définies pour chaque table
*/

-- Table des trajets
CREATE TABLE IF NOT EXISTS routes (
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

-- Table des réservations
CREATE TABLE IF NOT EXISTS bookings (
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

-- Table des évaluations
CREATE TABLE IF NOT EXISTS ratings (
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

-- Table des transactions de jetons
CREATE TABLE IF NOT EXISTS token_transactions (
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

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS routes_driver_id_idx ON routes(driver_id);
CREATE INDEX IF NOT EXISTS routes_status_idx ON routes(status);
CREATE INDEX IF NOT EXISTS bookings_route_id_idx ON bookings(route_id);
CREATE INDEX IF NOT EXISTS bookings_user_id_idx ON bookings(user_id);
CREATE INDEX IF NOT EXISTS ratings_route_id_idx ON ratings(route_id);
CREATE INDEX IF NOT EXISTS token_transactions_user_id_idx ON token_transactions(user_id);