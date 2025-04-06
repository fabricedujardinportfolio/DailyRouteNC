/*
  # Create Views

  1. Views
    - user_view: Combined user data from auth.users and profiles
*/

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