// Définition des provinces et leurs communes associées
export const PROVINCES = {
  PROVINCE_SUD: 'Province Sud',
  PROVINCE_NORD: 'Province Nord',
  PROVINCE_ILES: 'Province des Îles'
} as const;

export const COMMUNES_BY_PROVINCE: Record<string, string[]> = {
  [PROVINCES.PROVINCE_SUD]: [
    'Nouméa',
    'Mont-Dore',
    'Dumbéa',
    'Païta',
    'Yaté',
    'Boulouparis',
    'La Foa',
    'Sarraméa',
    'Farino',
    'Moindou',
    'Bourail',
    'Thio'
  ],
  [PROVINCES.PROVINCE_NORD]: [
    'Poya',
    'Pouembout',
    'Koné',
    'Voh',
    'Kaala-Gomen',
    'Koumac',
    'Poum',
    'Belep',
    'Ouégoa',
    'Pouébo',
    'Hienghène',
    'Touho',
    'Poindimié',
    'Ponérihouen',
    'Houaïlou',
    'Canala',
    'Kouaoua'
  ],
  [PROVINCES.PROVINCE_ILES]: [
    'Lifou',
    'Maré',
    'Ouvéa',
    'Île des Pins'
  ]
} as const;

// Fonction utilitaire pour obtenir toutes les communes
export function getAllCommunes(): string[] {
  return Object.values(COMMUNES_BY_PROVINCE).flat();
}

// Fonction pour obtenir la province d'une commune
export function getProvinceForCommune(commune: string): string | null {
  for (const [province, communes] of Object.entries(COMMUNES_BY_PROVINCE)) {
    if (communes.includes(commune)) {
      return province;
    }
  }
  return null;
}