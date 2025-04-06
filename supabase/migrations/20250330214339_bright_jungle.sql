/*
  # Fix database schema and views

  1. Changes
    - Create profiles table in public schema
    - Create activities table
    - Create view for user data
    - Set up proper RLS policies
*/

-- Create profiles table to store user data
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  name text,
  phone text,
  avatar_url text,
  documents jsonb,
  vehicle jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create trigger to create profile on user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name)
  VALUES (new.id, new.raw_user_meta_data->>'name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create activities table
CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  type text NOT NULL CHECK (type IN ('trip', 'booking', 'payment', 'rating', 'tokens')),
  description text NOT NULL,
  date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own activities"
  ON activities FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create view for user data
CREATE OR REPLACE VIEW user_view AS
SELECT 
  u.id,
  u.email,
  u.confirmed_at as email_confirmed_at,
  u.created_at,
  u.updated_at,
  p.name,
  p.phone,
  p.avatar_url as profile_picture,
  p.documents,
  p.vehicle,
  r.name as role
FROM auth.users u
LEFT JOIN profiles p ON p.id = u.id
LEFT JOIN user_roles ur ON ur.user_id = u.id
LEFT JOIN roles r ON r.id = ur.role_id;

-- Grant access to the view
GRANT SELECT ON user_view TO authenticated;

-- Create function to get current user
CREATE OR REPLACE FUNCTION get_current_user()
RETURNS user_view
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT *
  FROM user_view
  WHERE id = auth.uid()
$$;