/*
  # Ajout des tables de référence pour les localisations

  1. Nouvelles Tables
    - `provinces` : Provinces de Nouvelle-Calédonie
    - `communes` : Communes par province
    - `quartiers` : Quartiers par commune

  2. Données initiales
    - Insertion des provinces, communes et quartiers
*/

-- Table des provinces
CREATE TABLE IF NOT EXISTS provinces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Table des communes
CREATE TABLE IF NOT EXISTS communes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  province_id uuid REFERENCES provinces(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, province_id)
);

-- Table des quartiers
CREATE TABLE IF NOT EXISTS quartiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  commune_id uuid REFERENCES communes(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(name, commune_id)
);

-- Insertion des provinces
INSERT INTO provinces (name) VALUES
  ('Province Sud'),
  ('Province Nord'),
  ('Province des Îles')
ON CONFLICT (name) DO NOTHING;

-- Insertion des communes
WITH province_ids AS (
  SELECT id, name FROM provinces
)
INSERT INTO communes (name, province_id)
SELECT c.name, p.id
FROM (
  VALUES
    ('Nouméa', 'Province Sud'),
    ('Mont-Dore', 'Province Sud'),
    ('Dumbéa', 'Province Sud'),
    ('Païta', 'Province Sud'),
    ('Yaté', 'Province Sud'),
    ('Boulouparis', 'Province Sud'),
    ('La Foa', 'Province Sud'),
    ('Sarraméa', 'Province Sud'),
    ('Farino', 'Province Sud'),
    ('Moindou', 'Province Sud'),
    ('Bourail', 'Province Sud'),
    ('Thio', 'Province Sud'),
    ('Poya', 'Province Nord'),
    ('Pouembout', 'Province Nord'),
    ('Koné', 'Province Nord'),
    ('Voh', 'Province Nord'),
    ('Kaala-Gomen', 'Province Nord'),
    ('Koumac', 'Province Nord'),
    ('Poum', 'Province Nord'),
    ('Belep', 'Province Nord'),
    ('Ouégoa', 'Province Nord'),
    ('Pouébo', 'Province Nord'),
    ('Hienghène', 'Province Nord'),
    ('Touho', 'Province Nord'),
    ('Poindimié', 'Province Nord'),
    ('Ponérihouen', 'Province Nord'),
    ('Houaïlou', 'Province Nord'),
    ('Canala', 'Province Nord'),
    ('Kouaoua', 'Province Nord'),
    ('Lifou', 'Province des Îles'),
    ('Maré', 'Province des Îles'),
    ('Ouvéa', 'Province des Îles'),
    ('Île des Pins', 'Province des Îles')
) AS c(name, province_name)
JOIN province_ids p ON p.name = c.province_name
ON CONFLICT (name, province_id) DO NOTHING;

-- Insertion des quartiers (exemple pour Nouméa)
WITH commune_ids AS (
  SELECT c.id, c.name
  FROM communes c
  JOIN provinces p ON p.id = c.province_id
  WHERE c.name = 'Nouméa'
)
INSERT INTO quartiers (name, commune_id)
SELECT q.name, c.id
FROM (
  VALUES
    ('Vallée des Colons'),
    ('Faubourg Blanchot'),
    ('Quartier Latin'),
    ('Centre Ville'),
    ('Vallée du Tir'),
    ('Montravel'),
    ('Rivière Salée'),
    ('Tina'),
    ('Magenta'),
    ('Aérodrome'),
    ('Anse Vata'),
    ('Baie des Citrons'),
    ('Motor Pool'),
    ('Receiving'),
    ('Artillerie'),
    ('Orphelinat'),
    ('N''Géa'),
    ('Ouémo'),
    ('Portes de Fer'),
    ('Haut-Magenta'),
    ('PK4'),
    ('PK6'),
    ('PK7')
) AS q(name)
CROSS JOIN commune_ids c
ON CONFLICT (name, commune_id) DO NOTHING;