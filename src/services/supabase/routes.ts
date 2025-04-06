import { supabase } from '../supabase';
import type { Route } from '../../types/user';

export async function addRoute(routeData: Partial<Route>) {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      throw new Error('Utilisateur non authentifié');
    }

    // Validate required fields
    if (!routeData.startLocation?.province || !routeData.endLocation?.province) {
      throw new Error('Les provinces de départ et d\'arrivée sont obligatoires');
    }

    if (!routeData.departureTime) {
      throw new Error('L\'heure de départ est obligatoire');
    }

    // Convert dates to ISO format
    const departureTime = new Date(routeData.departureTime).toISOString();
    const estimatedArrivalTime = routeData.estimatedArrivalTime 
      ? new Date(routeData.estimatedArrivalTime).toISOString()
      : null;

    // Insert route
    const { data, error } = await supabase
      .from('routes')
      .insert([{
        driver_id: user.id,
        start_location: {
          province: routeData.startLocation.province,
          commune: routeData.startLocation.commune,
          quartier: routeData.startLocation.quartier
        },
        end_location: {
          province: routeData.endLocation.province,
          commune: routeData.endLocation.commune,
          quartier: routeData.endLocation.quartier
        },
        departure_time: departureTime,
        estimated_arrival_time: estimatedArrivalTime,
        available_seats: routeData.availableSeats || 1,
        price: routeData.price || 0,
        comments: routeData.comments,
        minimum_tokens: routeData.price || 1,
        status: 'active'
      }])
      .select()
      .single();

    if (error) {
      console.error('Erreur Supabase:', error);
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
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;

    // Get routes with bookings using the view
    const { data: routes, error: routesError } = await supabase
      .from('route_bookings')
      .select('*')
      .eq('status', 'active')
      .order('departure_time');

    if (routesError) throw routesError;
    if (!routes) return [];

    // Get user's bookings for these routes
    const { data: userBookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('route_id, status')
      .eq('user_id', user?.id)
      .in('status', ['pending', 'confirmed'])
      .in('route_id', routes.map(r => r.route_id));

    if (bookingsError) throw bookingsError;

    // Create a map of user's bookings
    const userBookingsMap = new Map(
      userBookings?.map(b => [b.route_id, b.status]) || []
    );

    // Group routes and their bookings
    const routesMap = new Map();
    routes.forEach(route => {
      if (!routesMap.has(route.route_id)) {
        routesMap.set(route.route_id, {
          id: route.route_id,
          driver_id: route.driver_id,
          startLocation: {
            ...route.start_location,
            province_name: '',
            commune_name: ''
          },
          endLocation: {
            ...route.end_location,
            province_name: '',
            commune_name: ''
          },
          departureTime: route.departure_time,
          estimatedArrivalTime: route.estimated_arrival_time,
          availableSeats: route.available_seats,
          price: route.price,
          minimum_tokens: route.minimum_tokens,
          comments: route.comments,
          status: route.status,
          bookings_count: route.total_bookings || 0,
          is_booked: userBookingsMap.has(route.route_id)
        });
      }
    });

    // Get provinces and communes for location names
    const provinceIds = new Set<string>();
    const communeIds = new Set<string>();
    routesMap.forEach(route => {
      if (route.startLocation?.province) provinceIds.add(route.startLocation.province);
      if (route.endLocation?.province) provinceIds.add(route.endLocation.province);
      if (route.startLocation?.commune) communeIds.add(route.startLocation.commune);
      if (route.endLocation?.commune) communeIds.add(route.endLocation.commune);
    });

    const [{ data: provinces }, { data: communes }] = await Promise.all([
      supabase
        .from('provinces')
        .select('id, name')
        .in('id', Array.from(provinceIds)),
      supabase
        .from('communes')
        .select('id, name')
        .in('id', Array.from(communeIds))
    ]);

    // Create maps for quick lookup
    const provinceMap = new Map(provinces?.map(p => [p.id, p.name]) || []);
    const communeMap = new Map(communes?.map(c => [c.id, c.name]) || []);

    // Format routes with location names
    return Array.from(routesMap.values()).map(route => ({
      ...route,
      startLocation: {
        ...route.startLocation,
        province_name: provinceMap.get(route.startLocation?.province),
        commune_name: communeMap.get(route.startLocation?.commune)
      },
      endLocation: {
        ...route.endLocation,
        province_name: provinceMap.get(route.endLocation?.province),
        commune_name: communeMap.get(route.endLocation?.commune)
      }
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des routes:', error);
    throw error;
  }
}

export async function deleteRoute(routeId: string) {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      throw new Error('Utilisateur non authentifié');
    }

    // Delete the route
    const { error: deleteError } = await supabase
      .from('routes')
      .delete()
      .eq('id', routeId)
      .eq('driver_id', user.id);

    if (deleteError) {
      console.error('Erreur lors de la suppression:', deleteError);
      throw new Error('Erreur lors de la suppression du trajet');
    }

    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du trajet:', error);
    throw error;
  }
}

export async function bookRoute(routeId: string) {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      throw new Error('Utilisateur non authentifié');
    }

    if (!routeId) {
      throw new Error('ID du trajet invalide');
    }

    // Get route details to check minimum tokens
    const { data: route, error: routeError } = await supabase
      .from('routes')
      .select('minimum_tokens')
      .eq('id', routeId)
      .single();

    if (routeError) throw routeError;
    if (!route) throw new Error('Trajet non trouvé');

    // Create booking using the function
    const { data, error } = await supabase
      .rpc('create_booking', {
        p_user_id: user.id,
        p_route_id: routeId,
        p_tokens_used: route.minimum_tokens
      });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la réservation:', error);
    throw error;
  }
}