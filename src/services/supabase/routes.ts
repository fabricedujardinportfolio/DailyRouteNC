import { supabase } from '../supabase';
import type { Route } from '../../types/user';

export async function addRoute(routeData: Partial<Route>) {
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
    .select(`
      *,
      start_province:provinces!start_location->province_id(name),
      start_commune:communes!start_location->commune_id(name),
      start_quartier:quartiers!start_location->quartier_id(name),
      end_province:provinces!end_location->province_id(name),
      end_commune:communes!end_location->commune_id(name),
      end_quartier:quartiers!end_location->quartier_id(name)
    `)
    .single();

  if (error) throw error;
  return data;
}

export async function fetchRoutes() {
  const { data, error } = await supabase
    .from('routes')
    .select(`
      *,
      start_province:provinces!start_location->province_id(name),
      start_commune:communes!start_location->commune_id(name),
      start_quartier:quartiers!start_location->quartier_id(name),
      end_province:provinces!end_location->province_id(name),
      end_commune:communes!end_location->commune_id(name),
      end_quartier:quartiers!end_location->quartier_id(name)
    `)
    .eq('status', 'active')
    .order('departure_time');

  if (error) throw error;
  return data;
}