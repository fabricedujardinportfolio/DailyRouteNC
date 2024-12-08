import { db } from '../firebase';
import {
  collection,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore';
import type {
  DashboardStats,
  DriverStats,
  WalkerStats
} from '../../types/dashboard';

export async function fetchUserStats(userId: string) {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    const userData = userDoc.data();

    if (!userData) {
      throw new Error('Utilisateur non trouvé');
    }

    const general: DashboardStats = {
      totalTrips: userData.totalTrips || 0,
      totalDistance: userData.totalDistance || 0,
      averageRating: userData.averageRating || 0,
      tokensBalance: userData.tokensBalance || 0
    };

    if (userData.role === 'driver') {
      const driverStats: DriverStats = {
        totalEarnings: userData.totalEarnings || 0,
        totalPassengers: userData.totalPassengers || 0,
        completedTrips: userData.completedTrips || 0,
        upcomingTrips: [],
        earnings: {
          total: userData.earnings?.total || 0,
          commission: userData.earnings?.commission || 0,
          net: userData.earnings?.net || 0
        }
      };

      const tripsQuery = query(
        collection(db, 'trips'),
        where('driverId', '==', userId),
        where('date', '>=', new Date()),
        orderBy('date'),
        limit(5)
      );

      const tripsSnapshot = await getDocs(tripsQuery);
      driverStats.upcomingTrips = tripsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any;

      return { general, driver: driverStats };
    } else {
      const walkerStats: WalkerStats = {
        totalSpent: userData.totalSpent || 0,
        favoriteDrivers: [],
        upcomingTrips: [],
        savedRoutes: []
      };

      const favoritesQuery = query(
        collection(db, 'favoriteDrivers'),
        where('walkerId', '==', userId),
        limit(4)
      );

      const favoritesSnapshot = await getDocs(favoritesQuery);
      const favoriteDriverIds = favoritesSnapshot.docs.map(doc => doc.data().driverId);

      if (favoriteDriverIds.length > 0) {
        const driversPromises = favoriteDriverIds.map(driverId =>
          getDoc(doc(db, 'users', driverId))
        );
        const driversSnapshots = await Promise.all(driversPromises);
        walkerStats.favoriteDrivers = driversSnapshots
          .filter(snap => snap.exists())
          .map(snap => ({
            id: snap.id,
            ...snap.data()
          })) as any;
      }

      const bookingsQuery = query(
        collection(db, 'bookings'),
        where('walkerId', '==', userId),
        where('date', '>=', new Date()),
        orderBy('date'),
        limit(5)
      );

      const bookingsSnapshot = await getDocs(bookingsQuery);
      walkerStats.upcomingTrips = bookingsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any;

      const savedRoutesQuery = query(
        collection(db, 'savedRoutes'),
        where('walkerId', '==', userId),
        limit(5)
      );

      const savedRoutesSnapshot = await getDocs(savedRoutesQuery);
      walkerStats.savedRoutes = savedRoutesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any;

      return { general, walker: walkerStats };
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    throw error;
  }
}