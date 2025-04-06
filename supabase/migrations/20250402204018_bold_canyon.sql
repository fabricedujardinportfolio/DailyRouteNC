-- Function to add tokens to user balance
CREATE OR REPLACE FUNCTION add_tokens(
  p_user_id uuid,
  p_amount integer,
  p_description text DEFAULT NULL
)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_new_balance integer;
BEGIN
  -- Update user token balance
  UPDATE profiles
  SET token_balance = token_balance + p_amount
  WHERE id = p_user_id
  RETURNING token_balance INTO v_new_balance;

  -- Create token transaction record
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

  RETURN v_new_balance;
END;
$$;