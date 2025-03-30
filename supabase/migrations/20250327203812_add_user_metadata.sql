-- Ajout des colonnes pour les métadonnées des utilisateurs
ALTER TABLE auth.users
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS role TEXT CHECK (role IN ('driver', 'walker')),
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS profile_picture TEXT;

-- Création des index pour les colonnes fréquemment utilisées
CREATE INDEX IF NOT EXISTS idx_users_role ON auth.users(role);
CREATE INDEX IF NOT EXISTS idx_users_phone ON auth.users(phone);

-- Création d'une vue pour faciliter l'accès aux données des utilisateurs
CREATE OR REPLACE VIEW public.users AS
SELECT 
  u.id,
  u.email,
  u.email_confirmed_at,
  u.created_at,
  u.updated_at,
  u.name,
  u.role,
  u.phone,
  u.profile_picture
FROM auth.users u;

-- Politiques RLS pour la table auth.users
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Les utilisateurs peuvent voir leurs propres données
CREATE POLICY "Users can view their own data" ON auth.users
  FOR SELECT
  USING (auth.uid() = id);

-- Les utilisateurs peuvent mettre à jour leurs propres données
CREATE POLICY "Users can update their own data" ON auth.users
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Les administrateurs peuvent voir toutes les données
CREATE POLICY "Admins can view all data" ON auth.users
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Les administrateurs peuvent mettre à jour toutes les données
CREATE POLICY "Admins can update all data" ON auth.users
  FOR UPDATE
  USING (auth.role() = 'service_role');