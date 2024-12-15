export interface User {
  id: string;
  email: string;
  name: string;
  role: 'driver' | 'walker';
  phoneNumber?: string;
  profilePicture?: string;
  tokensBalance?: number;
  totalTrips?: number; // Assurez-vous que cette ligne est présente
  totalDistance?: number;
  averageRating?: number;
  isVerified: boolean;
  documents: UserDocuments;
}

export interface UserDocuments {
  identityCard?: DocumentInfo;
  driverLicense?: DocumentInfo;
  vehicleRegistration?: DocumentInfo;
  insurance?: DocumentInfo;
  status: 'pending' | 'verified' | 'rejected';
  rejectionReason?: string;
}

export interface DocumentInfo {
  url: string;
  uploadDate: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  rejectionReason?: string;
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
  driverName?: string; // Ajoutez cette ligne si nécessaire
  startLocation: GeoPoint;
  endLocation: GeoPoint;
  departureTime: string;
  availableSeats: number;
  price: number;
  frequency: 'daily' | 'weekdays' | 'custom';
  customDays?: string[];
  driverRating?: number;
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