/*
  # Ajout des quartiers pour les autres communes

  1. Modifications
    - Ajout des quartiers pour Mont-Dore, Dumbéa et autres communes principales
*/

-- Quartiers du Mont-Dore
WITH commune_ids AS (
  SELECT c.id, c.name
  FROM communes c
  WHERE c.name = 'Mont-Dore'
)
INSERT INTO quartiers (name, commune_id)
SELECT q.name, c.id
FROM (
  VALUES
    ('Yahoué'),
    ('Robinson'),
    ('Boulari'),
    ('Saint-Michel'),
    ('La Coulée'),
    ('Plum'),
    ('Saint-Louis'),
    ('Pont-des-Français'),
    ('La Conception')
) AS q(name)
CROSS JOIN commune_ids c
ON CONFLICT (name, commune_id) DO NOTHING;

-- Quartiers de Dumbéa
WITH commune_ids AS (
  SELECT c.id, c.name
  FROM communes c
  WHERE c.name = 'Dumbéa'
)
INSERT INTO quartiers (name, commune_id)
SELECT q.name, c.id
FROM (
  VALUES
    ('Koutio'),
    ('Auteuil'),
    ('Dumbéa-sur-mer'),
    ('Normandie'),
    ('ZAC Panda'),
    ('Val Suzon'),
    ('Koé'),
    ('Dumbéa Centre'),
    ('ZI Ducos')
) AS q(name)
CROSS JOIN commune_ids c
ON CONFLICT (name, commune_id) DO NOTHING;

-- Quartiers de Païta
WITH commune_ids AS (
  SELECT c.id, c.name
  FROM communes c
  WHERE c.name = 'Païta'
)
INSERT INTO quartiers (name, commune_id)
SELECT q.name, c.id
FROM (
  VALUES
    ('Centre-ville'),
    ('Ondémia'),
    ('Savannah'),
    ('Bernard'),
    ('Tontouta'),
    ('Port Laguerre'),
    ('Tamoa'),
    ('N''Dé')
) AS q(name)
CROSS JOIN commune_ids c
ON CONFLICT (name, commune_id) DO NOTHING;