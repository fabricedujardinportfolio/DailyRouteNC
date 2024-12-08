export interface DashboardStats {
  totalTrips: number;
  totalDistance: number;
  averageRating: number;
  tokensBalance: number;
}

export interface Activity {
  id: string;
  type: 'trip' | 'booking' | 'payment' | 'rating' | 'tokens';
  description: string;
  date: string;
}

export interface Trip {
  id: string;
  startLocation: string;
  endLocation: string;
  date: string;
  price: number;
  maxPassengers: number;
  passengers: string[];
  driverName?: string;
  tokens?: number;
}

export interface Driver {
  id: string;
  name: string;
  profilePicture?: string;
  rating: number;
  totalTrips: number;
}

export interface SavedRoute {
  id: string;
  startLocation: string;
  endLocation: string;
  frequency: string;
  availableSeats: number;
}

export interface DriverStats {
  totalEarnings: number;
  totalPassengers: number;
  completedTrips: number;
  upcomingTrips: Trip[];
  earnings: {
    total: number;
    commission: number;
    net: number;
  };
}

export interface WalkerStats {
  totalSpent: number;
  favoriteDrivers: Driver[];
  upcomingTrips: Trip[];
  savedRoutes: SavedRoute[];
}