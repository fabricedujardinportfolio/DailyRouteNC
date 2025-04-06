/*
  # Routes and Bookings Schema

  1. Tables
    - routes: Routes/trips
    - bookings: Trip bookings
    - ratings: User ratings
    - token_transactions: Token transaction history
*/

-- Routes Table
CREATE TABLE routes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  start_location jsonb NOT NULL,
  end_location jsonb NOT NULL,
  departure_time timestamptz NOT NULL,
  estimated_arrival_time timestamptz,
  available_seats int NOT NULL CHECK (available_seats >= 0),
  price int NOT NULL CHECK (price >= 0),
  comments text,
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'completed')) DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

-- Add indexes
CREATE INDEX routes_driver_id_idx ON routes(driver_id);
CREATE INDEX routes_status_idx ON routes(status);
CREATE INDEX routes_departure_time_idx ON routes(departure_time);

-- Enable RLS
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Les conducteurs peuvent créer leurs trajets"
  ON routes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = driver_id);

CREATE POLICY "Tout le monde peut voir les trajets actifs"
  ON routes FOR SELECT
  TO authenticated
  USING (status = 'active');

CREATE POLICY "Les conducteurs peuvent modifier leurs trajets"
  ON routes FOR UPDATE
  TO authenticated
  USING (auth.uid() = driver_id AND status = 'active')
  WITH CHECK (auth.uid() = driver_id AND status = 'active');

-- Bookings Table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id uuid REFERENCES routes(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
  tokens_used int NOT NULL CHECK (tokens_used > 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent créer leurs réservations"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent voir leurs réservations"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() IN (
    SELECT driver_id FROM routes WHERE id = route_id
  ));

-- Ratings Table
CREATE TABLE ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id uuid REFERENCES routes(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  rating int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(route_id, user_id)
);

ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent créer leurs évaluations"
  ON ratings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Tout le monde peut voir les évaluations"
  ON ratings FOR SELECT
  TO authenticated
  USING (true);

-- Token Transactions Table
CREATE TABLE token_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  amount int NOT NULL,
  type text NOT NULL CHECK (type IN ('purchase', 'booking', 'refund')),
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE token_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent voir leurs transactions"
  ON token_transactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create function to validate route dates
CREATE OR REPLACE FUNCTION validate_route_dates()
RETURNS trigger AS $$
BEGIN
  -- Check if departure time is in the future
  IF NEW.departure_time <= CURRENT_TIMESTAMP THEN
    RAISE EXCEPTION 'Departure time must be in the future';
  END IF;

  -- Check if estimated arrival time is after departure time
  IF NEW.estimated_arrival_time IS NOT NULL AND NEW.estimated_arrival_time <= NEW.departure_time THEN
    RAISE EXCEPTION 'Estimated arrival time must be after departure time';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER validate_route_dates_trigger
  BEFORE INSERT OR UPDATE ON routes
  FOR EACH ROW
  EXECUTE FUNCTION validate_route_dates();