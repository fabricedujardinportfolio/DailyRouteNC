import { supabase } from '../supabase';

export async function purchaseTokens(amount: number) {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      throw new Error('Utilisateur non authentifié');
    }

    // Create token transaction using RPC function
    const { data, error } = await supabase.rpc('add_tokens', {
      p_user_id: user.id,
      p_amount: amount,
      p_description: `Achat de ${amount} jetons`
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'achat de jetons:', error);
    throw error;
  }
}