import { supabase } from './supabase';
import type { Route } from '../types/user';

export async function addRoute(routeData: Partial<Route>) {
  try {
    const { data, error } = await supabase
      .from('routes')
      .insert([{
        driver_id: routeData.driverId,
        start_location: {
          province_id: routeData.startLocation.province,
          commune_id: routeData.startLocation.commune,
          quartier_id: routeData.startLocation.quartier
        },
        end_location: {
          province_id: routeData.endLocation.province,
          commune_id: routeData.endLocation.commune,
          quartier_id: routeData.endLocation.quartier
        },
        departure_time: routeData.departureTime,
        available_seats: routeData.availableSeats,
        price: routeData.price,
        comments: routeData.comments,
        status: 'active'
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du trajet:', error);
    throw error;
  }
}

export async function fetchRoutes() {
  try {
    const { data, error } = await supabase
      .from('routes')
      .select(`
        *,
        start_location,
        end_location
      `)
      .eq('status', 'active')
      .order('departure_time');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des trajets:', error);
    throw error;
  }
}