import { supabase } from '../../services/supabase';
import type {
  DashboardStats,
  DriverStats,
  WalkerStats
} from '../../types/dashboard';

export async function fetchUserStats(userId: string) {
  try {
    // Récupérer les données de base de l'utilisateur
    const { data: userData, error: userError } = await supabase
      .from('auth.users')
      .select('id, email, name, phone, profile_picture')
      .eq('id', userId)
      .single();

    if (userError) throw userError;
    if (!userData) throw new Error('Utilisateur non trouvé');

    // Récupérer les rôles de l'utilisateur
    const { data: userRoles, error: rolesError } = await supabase
      .from('user_roles')
      .select('roles(*)')
      .eq('user_id', userId);

    if (rolesError) throw rolesError;

    // Déterminer le rôle principal
    const roles = userRoles?.map(r => r.roles.name) || [];
    const role = roles.includes('double_role') ? 'double_role' :
                  roles.includes('driver') ? 'driver' :
                  roles.includes('walker') ? 'walker' : null;

    // Statistiques générales (vides pour l'instant)
    const general: DashboardStats = {
      totalTrips: 0,
      totalDistance: 0,
      averageRating: 0,
      tokensBalance: 0
    };

    // Retourner uniquement les statistiques générales
    return { general };
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    throw error;
  }
}