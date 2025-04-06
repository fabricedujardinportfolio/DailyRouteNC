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

-- Modifier la politique pour permettre l'accès public sans authentification
DROP POLICY IF EXISTS "Public can read roles" ON roles;
CREATE POLICY "Anyone can read roles"
  ON roles FOR SELECT
  USING (true);

-- Le reste du fichier reste inchangé...
[Previous content after this point remains exactly the same]