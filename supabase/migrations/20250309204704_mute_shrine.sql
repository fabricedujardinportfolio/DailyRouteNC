/*
  # Création de la table des évaluations

  1. Nouvelle Table
    - `ratings` : Système d'évaluation
      - `id` (uuid, clé primaire)
      - `route_id` (uuid, référence vers routes)
      - `user_id` (uuid, référence vers auth.users)
      - `rating` (int)
      - `comment` (text)
      - `created_at` (timestamptz)

  2. Sécurité
    - RLS activé
    - Politiques d'accès pour les évaluations
*/

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

CREATE INDEX IF NOT EXISTS ratings_route_id_idx ON ratings(route_id);