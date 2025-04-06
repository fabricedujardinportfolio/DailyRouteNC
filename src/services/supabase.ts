import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Les variables d\'environnement Supabase sont manquantes');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const reconnectSupabase = async () => {
  try {
    // Déconnexion
    await supabase.auth.signOut();
    
    // Réinitialisation du client Supabase
    const newClient = createClient(supabaseUrl, supabaseAnonKey);
    
    // Vérification de la connexion
    const { data, error } = await newClient.auth.getSession();
    
    if (error) {
      throw error;
    }
    
    console.log('Reconnexion Supabase réussie');
    return newClient;
  } catch (error) {
    console.error('Erreur lors de la reconnexion Supabase:', error);
    throw error;
  }
};