/*
  # Fix Add Tokens Function

  1. Changes
    - Fix return value handling in add_tokens function
    - Ensure proper transaction handling
    - Return new balance correctly
*/

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS add_tokens(uuid, integer, text);

-- Recreate function with fixed return handling
CREATE OR REPLACE FUNCTION add_tokens(
  p_user_id uuid,
  p_amount integer,
  p_description text DEFAULT NULL
)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_new_balance integer;
BEGIN
  -- Update token balance and get new value
  UPDATE profiles
  SET token_balance = token_balance + p_amount
  WHERE id = p_user_id
  RETURNING token_balance INTO v_new_balance;

  -- Create token transaction
  INSERT INTO token_transactions (
    user_id,
    amount,
    type,
    description
  ) VALUES (
    p_user_id,
    p_amount,
    'purchase',
    COALESCE(p_description, 'Token purchase')
  );

  -- Create activity record
  INSERT INTO activities (
    user_id,
    type,
    description
  ) VALUES (
    p_user_id,
    'tokens',
    'Achat de ' || p_amount || ' jetons'
  );

  -- Return the new balance
  RETURN COALESCE(v_new_balance, 0);
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION add_tokens(uuid, integer, text) TO authenticated;