import { supabase } from '../../services/supabase';
import type { Activity } from '../../types/dashboard';

export async function fetchUserActivities(userId: string): Promise<Activity[]> {
  try {
    const { data: activities, error } = await supabase
      .from('activities')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    return activities || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    throw error;
  }
}