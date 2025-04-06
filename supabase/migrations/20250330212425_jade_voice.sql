-- Create roles table if it doesn't exist
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

-- Disable RLS completely for roles table
ALTER TABLE roles DISABLE ROW LEVEL SECURITY;