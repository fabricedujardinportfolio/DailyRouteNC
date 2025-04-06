export interface User {
  id: string;
  email: string;
  name: string;
  role: 'driver' | 'walker' | 'double_role';
  phoneNumber?: string;
  profilePicture?: string;
  tokensBalance?: number;
  totalTrips?: number;
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
  role: 'driver' | 'double_role';
  vehicle: {
    model: string;
    color: string;
    seats: number;
    licensePlate: string;
  };
  routes: Route[];
}

export interface Walker extends User {
  role: 'walker' | 'double_role';
  tokens: number;
  bookings: Booking[];
}

export interface Route {
  id: string;
  driver_id: string;
  startLocation: Location;
  endLocation: Location;
  departureTime: string;
  estimatedArrivalTime?: string;
  availableSeats: number;
  price: number;
  minimum_tokens: number;
  frequency?: 'daily' | 'weekdays' | 'custom';
  customDays?: string[];
  driverRating?: number;
  comments?: string;
  bookings_count: number;
  is_booked?: boolean;
}

export interface Location {
  province: string;
  commune?: string;
  quartier?: string;
  province_name?: string;
  commune_name?: string;
  quartier_name?: string;
}

export interface Booking {
  id: string;
  routeId: string;
  walkerId: string;
  driverId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  date: string;
  tokensUsed: number;
}