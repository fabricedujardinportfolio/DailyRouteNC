/*
  # Création de la table des transactions de jetons

  1. Nouvelle Table
    - `token_transactions` : Historique des transactions de jetons
      - `id` (uuid, clé primaire)
      - `user_id` (uuid, référence vers auth.users)
      - `amount` (int)
      - `type` (text)
      - `description` (text)
      - `created_at` (timestamptz)

  2. Sécurité
    - RLS activé
    - Politiques d'accès pour les transactions
*/

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

CREATE INDEX IF NOT EXISTS token_transactions_user_id_idx ON token_transactions(user_id);