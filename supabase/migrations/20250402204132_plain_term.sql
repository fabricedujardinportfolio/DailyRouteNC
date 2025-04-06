/*
  # Add Token Management Functions

  1. Changes
    - Add function to add tokens to user balance
    - Create transaction and activity records
    - Return new balance
*/

-- Function to add tokens to user balance
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
BEGIN
  -- Update user token balance and get new balance
  WITH updated_balance AS (
    UPDATE profiles
    SET token_balance = token_balance + p_amount
    WHERE id = p_user_id
    RETURNING token_balance
  ),
  -- Create token transaction record
  new_transaction AS (
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
    )
  ),
  -- Create activity record
  new_activity AS (
    INSERT INTO activities (
      user_id,
      type,
      description
    ) VALUES (
      p_user_id,
      'tokens',
      'Achat de ' || p_amount || ' jetons'
    )
  )
  -- Return the new balance
  SELECT token_balance FROM updated_balance;

  -- Return 0 if no rows were updated
  RETURN 0;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION add_tokens(uuid, integer, text) TO authenticated;