/*
  # Fix profiles table RLS policies

  1. Changes
    - Add INSERT policy for profiles table
    - Add UPSERT policy for profiles table
    - Ensure users can only manage their own profile
*/

-- Add INSERT policy for profiles
CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Add UPSERT policy for profiles
CREATE POLICY "Users can upsert their own profile"
  ON profiles FOR UPDATE USING (
    auth.uid() = id
  ) WITH CHECK (
    auth.uid() = id
  );

-- Ensure trigger function has proper permissions
ALTER FUNCTION public.handle_new_user() SECURITY DEFINER;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON public.profiles TO authenticated;