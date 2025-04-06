/*
  # Add Quartiers for All Communes

  1. Changes
    - Add quartiers for each commune in Province Sud
    - Add quartiers for each commune in Province Nord
    - Add quartiers for each commune in Province des Îles
    - Add basic quartiers for remaining communes
*/

-- Quartiers for Nouméa
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Nouméa';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Artillerie', v_commune_id),
      ('Aérodrome', v_commune_id),
      ('Anse Vata', v_commune_id),
      ('Baie des Citrons', v_commune_id),
      ('Centre Ville', v_commune_id),
      ('Faubourg Blanchot', v_commune_id),
      ('Magenta', v_commune_id),
      ('Motor Pool', v_commune_id),
      ('N''Géa', v_commune_id),
      ('Nouville', v_commune_id),
      ('Orphelinat', v_commune_id),
      ('Ouémo', v_commune_id),
      ('PK4', v_commune_id),
      ('PK6', v_commune_id),
      ('PK7', v_commune_id),
      ('Portes de Fer', v_commune_id),
      ('Quartier Latin', v_commune_id),
      ('Receiving', v_commune_id),
      ('Rivière Salée', v_commune_id),
      ('Tina', v_commune_id),
      ('Tindu', v_commune_id),
      ('Trianon', v_commune_id),
      ('Vallée des Colons', v_commune_id),
      ('Vallée du Génie', v_commune_id),
      ('Vallée du Tir', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Mont-Dore
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Mont-Dore';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Boulari', v_commune_id),
      ('La Coulée', v_commune_id),
      ('Mont-Dore Sud', v_commune_id),
      ('Plum', v_commune_id),
      ('Pont-des-Français', v_commune_id),
      ('Robinson', v_commune_id),
      ('Saint-Louis', v_commune_id),
      ('Saint-Michel', v_commune_id),
      ('Yahoué', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Dumbéa
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Dumbéa';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Auteuil', v_commune_id),
      ('Dumbéa Centre', v_commune_id),
      ('Dumbéa Nord', v_commune_id),
      ('Dumbéa River', v_commune_id),
      ('Dumbéa Sur Mer', v_commune_id),
      ('Katiramona', v_commune_id),
      ('Koutio', v_commune_id),
      ('Nakutakoin', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Païta
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Païta';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Bernard', v_commune_id),
      ('Ondémia', v_commune_id),
      ('Païta Centre', v_commune_id),
      ('Païta Village', v_commune_id),
      ('Port Laguerre', v_commune_id),
      ('Savannah', v_commune_id),
      ('Tamoa', v_commune_id),
      ('Tontouta', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Koné
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Koné';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Baco', v_commune_id),
      ('Koné Centre', v_commune_id),
      ('Pouembout', v_commune_id),
      ('Tiaoué', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Lifou
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Lifou';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Chépénéhé', v_commune_id),
      ('Drueulu', v_commune_id),
      ('Hapetra', v_commune_id),
      ('Luengoni', v_commune_id),
      ('Mou', v_commune_id),
      ('Wé', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Maré
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Maré';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('La Roche', v_commune_id),
      ('Nécé', v_commune_id),
      ('Pénélo', v_commune_id),
      ('Tadine', v_commune_id),
      ('Wabao', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Quartiers for Ouvéa
DO $$ 
DECLARE
  v_commune_id uuid;
BEGIN
  SELECT id INTO v_commune_id FROM communes WHERE name = 'Ouvéa';
  IF v_commune_id IS NOT NULL THEN
    INSERT INTO quartiers (name, commune_id) VALUES
      ('Fayaoué', v_commune_id),
      ('Mouli', v_commune_id),
      ('Saint-Joseph', v_commune_id)
    ON CONFLICT (name, commune_id) DO NOTHING;
  END IF;
END $$;

-- Add basic quartiers for other communes
INSERT INTO quartiers (name, commune_id)
SELECT c.name || ' Centre', c.id
FROM communes c
WHERE c.name NOT IN ('Nouméa', 'Mont-Dore', 'Dumbéa', 'Païta', 'Koné', 'Lifou', 'Maré', 'Ouvéa')
ON CONFLICT (name, commune_id) DO NOTHING;

INSERT INTO quartiers (name, commune_id)
SELECT c.name || ' Village', c.id
FROM communes c
WHERE c.name NOT IN ('Nouméa', 'Mont-Dore', 'Dumbéa', 'Païta', 'Koné', 'Lifou', 'Maré', 'Ouvéa')
ON CONFLICT (name, commune_id) DO NOTHING;