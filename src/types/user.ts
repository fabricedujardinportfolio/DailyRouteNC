export interface User {
  id: string;
  email: string;
  name: string;
  role: 'driver' | 'walker';
  phoneNumber?: string;
  profilePicture?: string;
}

export interface Driver extends User {
  role: 'driver';
  vehicle: {
    model: string;
    color: string;
    seats: number;
    licensePlate: string;
  };
  routes: Route[];
}

export interface Walker extends User {
  role: 'walker';
  tokens: number;
  bookings: Booking[];
}

export interface Route {
  id: string;
  driverId: string;
  startLocation: GeoPoint;
  endLocation: GeoPoint;
  departureTime: string;
  availableSeats: number;
  price: number;
  frequency: 'daily' | 'weekdays' | 'custom';
  customDays?: string[];
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Booking {
  id: string;
  routeId: string;
  walkerId: string;
  driverId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  pickupLocation: GeoPoint;
  dropoffLocation: GeoPoint;
  date: string;
  tokensUsed: number;
}