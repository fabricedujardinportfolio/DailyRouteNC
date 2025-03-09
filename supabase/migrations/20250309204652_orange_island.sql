/*
  # Création de la table des trajets

  1. Nouvelle Table
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

  2. Sécurité
    - RLS activé
    - Politiques d'accès pour les conducteurs et utilisateurs
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

CREATE INDEX IF NOT EXISTS routes_driver_id_idx ON routes(driver_id);
CREATE INDEX IF NOT EXISTS routes_status_idx ON routes(status);