/*
  # Création de la table des réservations

  1. Nouvelle Table
    - `bookings` : Gère les réservations
      - `id` (uuid, clé primaire)
      - `route_id` (uuid, référence vers routes)
      - `user_id` (uuid, référence vers auth.users)
      - `status` (text)
      - `tokens_used` (int)
      - `created_at` (timestamptz)

  2. Sécurité
    - RLS activé
    - Politiques d'accès pour les utilisateurs
*/

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

CREATE INDEX IF NOT EXISTS bookings_route_id_idx ON bookings(route_id);
CREATE INDEX IF NOT EXISTS bookings_user_id_idx ON bookings(user_id);