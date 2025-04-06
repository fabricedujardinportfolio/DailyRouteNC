import { supabase } from '../supabase';
import type {
  DashboardStats,
  DriverStats,
  WalkerStats,
  Activity,
  Trip
} from '../../types/dashboard';

export async function fetchUserStats(userId: string): Promise<{
  general: DashboardStats;
  driver?: DriverStats;
  walker?: WalkerStats;
}> {
  try {
    // Get user data from the user_view
    const { data: userData, error: userError } = await supabase
      .rpc('get_current_user');

    if (userError) throw userError;
    if (!userData) throw new Error('Utilisateur non trouvé');

    // Get user profile
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError) throw profileError;

    // Get user activities count
    const { count: activitiesCount, error: activitiesError } = await supabase
      .from('activities')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    if (activitiesError) throw activitiesError;

    // Get user ratings average
    const { data: ratingsData, error: ratingsError } = await supabase
      .from('ratings')
      .select('rating')
      .eq('user_id', userId);

    if (ratingsError) throw ratingsError;

    const averageRating = ratingsData && ratingsData.length > 0
      ? ratingsData.reduce((acc, curr) => acc + curr.rating, 0) / ratingsData.length
      : 0;

    // Build general stats
    const general: DashboardStats = {
      totalTrips: activitiesCount || 0,
      totalDistance: 0, // This will need to be calculated based on actual trip data
      averageRating,
      tokensBalance: profileData.token_balance || 0
    };

    // Build driver stats if user is a driver
    let driver: DriverStats | undefined;
    if (userData.role === 'driver' || userData.role === 'double_role') {
      // Get upcoming trips with bookings using the route_bookings view
      const { data: routeBookings, error: routesError } = await supabase
        .from('route_bookings')
        .select('*')
        .eq('driver_id', userId)
        .eq('status', 'active')
        .gte('departure_time', new Date().toISOString())
        .order('departure_time')
        .limit(5);

      if (routesError) throw routesError;

      // Group bookings by route
      const routesMap = new Map<string, Trip>();
      routeBookings?.forEach(rb => {
        if (!routesMap.has(rb.route_id)) {
          routesMap.set(rb.route_id, {
            id: rb.route_id,
            startLocation: rb.start_location.commune_name || rb.start_location.province_name,
            endLocation: rb.end_location.commune_name || rb.end_location.province_name,
            date: rb.departure_time,
            price: rb.price,
            maxPassengers: rb.available_seats,
            bookings_count: rb.total_bookings,
            new_bookings: []
          });
        }

        if (rb.booking_id && rb.booking_status === 'pending') {
          const route = routesMap.get(rb.route_id);
          if (route) {
            if (!route.new_bookings) route.new_bookings = [];
            route.new_bookings.push({
              id: rb.booking_id,
              user_name: rb.passenger_name,
              created_at: rb.booking_created_at
            });
          }
        }
      });

      // Calculate earnings
      const { data: earnings } = await supabase
        .from('token_transactions')
        .select('amount')
        .eq('user_id', userId)
        .eq('type', 'booking');

      const totalEarnings = earnings?.reduce((sum, tx) => sum + Math.abs(tx.amount), 0) || 0;
      const commission = totalEarnings * 0.15; // 15% commission

      driver = {
        totalEarnings,
        totalPassengers: 0, // Calculate from completed trips
        completedTrips: 0, // Calculate from completed trips
        upcomingTrips: Array.from(routesMap.values()),
        earnings: {
          total: totalEarnings,
          commission,
          net: totalEarnings - commission
        }
      };
    }

    // Build walker stats if user is a walker
    let walker: WalkerStats | undefined;
    if (userData.role === 'walker' || userData.role === 'double_role') {
      // Get upcoming bookings
      const { data: upcomingBookings, error: bookingsError } = await supabase
        .from('route_bookings')
        .select('*')
        .eq('passenger_id', userId)
        .eq('booking_status', 'pending')
        .eq('status', 'active')
        .gte('departure_time', new Date().toISOString())
        .order('departure_time')
        .limit(5);

      if (bookingsError) throw bookingsError;

      // Format upcoming trips
      const upcomingTrips: Trip[] = (upcomingBookings || []).map(rb => ({
        id: rb.route_id,
        startLocation: rb.start_location.commune_name || rb.start_location.province_name,
        endLocation: rb.end_location.commune_name || rb.end_location.province_name,
        date: rb.departure_time,
        price: rb.price,
        maxPassengers: rb.available_seats,
        bookings_count: rb.total_bookings,
        tokens: rb.minimum_tokens
      }));

      // Calculate total spent
      const { data: spent } = await supabase
        .from('token_transactions')
        .select('amount')
        .eq('user_id', userId)
        .eq('type', 'booking');

      const totalSpent = spent?.reduce((sum, tx) => sum + Math.abs(tx.amount), 0) || 0;

      walker = {
        totalSpent,
        favoriteDrivers: [], // Implement favorite drivers feature later
        upcomingTrips,
        savedRoutes: [] // Implement saved routes feature later
      };
    }

    return { general, driver, walker };
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    throw error;
  }
}

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