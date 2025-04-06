import { supabase } from './supabase';
import type { Route } from '../types/user';

export async function addRoute(routeData: Partial<Route>) {
  console.log(routeData);
  
  try {
    // Vérifier que l'utilisateur est authentifié via Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      throw new Error('Utilisateur non authentifié');
    }

    // Convertir les dates en format ISO
    const departureTime = routeData.departureTime ? new Date(routeData.departureTime).toISOString() : undefined;
    const estimatedArrivalTime = routeData.estimatedArrivalTime ? new Date(routeData.estimatedArrivalTime).toISOString() : undefined;

    const { data, error } = await supabase
      .from('routes')
      .insert([{
        driver_id: user.id,
        start_location: routeData.startLocation ? {
          province: routeData.startLocation.province,
          commune: routeData.startLocation.commune,
          quartier: routeData.startLocation.quartier
        } : undefined,
        end_location: routeData.endLocation ? {
          province: routeData.endLocation.province,
          commune: routeData.endLocation.commune,
          quartier: routeData.endLocation.quartier
        } : undefined,
        departure_time: departureTime,
        estimated_arrival_time: estimatedArrivalTime,
        available_seats: routeData.availableSeats,
        price: routeData.price,
        comments: routeData.comments,
        status: 'active'
      }])
      .select('*')
      .single();

    if (error) {
      console.error('Erreur détaillée de Supabase:', error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du trajet:', error);
    throw error;
  }
}

export async function fetchRoutes() {
  try {
    const { data: routes, error: routesError } = await supabase
      .from('routes')
      .select('*')
      .eq('status', 'active')
      .order('departure_time');

    if (routesError) throw routesError;

    // Récupérer tous les IDs uniques pour les requêtes groupées
    const uniqueProvinceIds = new Set<string>();
    const uniqueCommuneIds = new Set<string>();
    const uniqueQuartierIds = new Set<string>();

    // Extraire les IDs des locations
    routes?.forEach(route => {
      if (route.start_location?.province) uniqueProvinceIds.add(route.start_location.province);
      if (route.start_location?.commune) uniqueCommuneIds.add(route.start_location.commune);
      if (route.start_location?.quartier) uniqueQuartierIds.add(route.start_location.quartier);
      if (route.end_location?.province) uniqueProvinceIds.add(route.end_location.province);
      if (route.end_location?.commune) uniqueCommuneIds.add(route.end_location.commune);
      if (route.end_location?.quartier) uniqueQuartierIds.add(route.end_location.quartier);
    });

    // Récupérer les données des provinces, communes et quartiers
    const [provinces, communes, quartiers] = await Promise.all([
      supabase
        .from('provinces')
        .select('id, name')
        .in('id', Array.from(uniqueProvinceIds)),
      supabase
        .from('communes')
        .select('id, name')
        .in('id', Array.from(uniqueCommuneIds)),
      supabase
        .from('quartiers')
        .select('id, name')
        .in('id', Array.from(uniqueQuartierIds))
    ]);

    // Créer des maps pour un accès rapide
    const provincesMap = new Map(provinces.data?.map(p => [p.id, p]) || []);
    const communesMap = new Map(communes.data?.map(c => [c.id, c]) || []);
    const quartiersMap = new Map(quartiers.data?.map(q => [q.id, q]) || []);

    // Ajouter les noms aux routes
    const routesWithNames = routes?.map(route => ({
      ...route,
      startLocation: {
        ...route.start_location,
        province_name: provincesMap.get(route.start_location?.province)?.name,
        commune_name: communesMap.get(route.start_location?.commune)?.name,
        quartier_name: quartiersMap.get(route.start_location?.quartier)?.name
      },
      endLocation: {
        ...route.end_location,
        province_name: provincesMap.get(route.end_location?.province)?.name,
        commune_name: communesMap.get(route.end_location?.commune)?.name,
        quartier_name: quartiersMap.get(route.end_location?.quartier)?.name
      }
    }));

    return routesWithNames || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des routes:', error);
    throw error;
  }
}