<template>
  <div class="bg-white p-4 rounded-lg shadow-sm space-y-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Filtres</h3>
    
    <!-- Province -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Province</label>
      <select
        v-model="filters.province"
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Toutes les provinces</option>
        <option value="sud">Province Sud</option>
        <option value="nord">Province Nord</option>
        <option value="iles">Province des Îles</option>
      </select>
    </div>

    <!-- Commune -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Commune</label>
      <select
        v-model="filters.commune"
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Toutes les communes</option>
        <option v-for="commune in communes" :key="commune" :value="commune">
          {{ commune }}
        </option>
      </select>
    </div>

    <!-- Quartier -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Quartier</label>
      <select
        v-model="filters.quartier"
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Tous les quartiers</option>
        <option v-for="quartier in quartiers" :key="quartier" :value="quartier">
          {{ quartier }}
        </option>
      </select>
    </div>

    <!-- Note minimale du conducteur -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Note minimale du conducteur</label>
      <div class="flex items-center space-x-2">
        <template v-for="rating in 5" :key="rating">
          <button
            @click="filters.minRating = rating"
            class="text-2xl"
            :class="rating <= filters.minRating ? 'text-yellow-400' : 'text-gray-300'"
          >
            ★
          </button>
        </template>
      </div>
    </div>

    <!-- Bouton de réinitialisation -->
    <button
      @click="resetFilters"
      class="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
    >
      Réinitialiser les filtres
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

interface RouteFilters {
  province: string;
  commune: string;
  quartier: string;
  minRating: number;
}

const communes = [
  'Nouméa',
  'Mont-Dore',
  'Dumbéa',
  'Païta',
  'Yaté',
  'Thio',
  'Boulouparis',
  'La Foa',
  'Sarraméa',
  'Farino',
  'Moindou',
  'Bourail',
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
  'Kouaoua',
  'Lifou',
  'Maré',
  'Ouvéa',
  'Île des Pins'
];

const quartiers = [
  'Vallée des Colons',
  'Faubourg Blanchot',
  'Quartier Latin',
  'Centre Ville',
  'Vallée du Tir',
  'Montravel',
  'Rivière Salée',
  'Tina',
  'Magenta',
  'Aérodrome',
  'Anse Vata',
  'Baie des Citrons',
  'Motor Pool',
  'Receiving',
  'Artillerie',
  'Orphelinat',
  'N\'Géa',
  'Ouémo',
  'Portes de Fer',
  'Haut-Magenta',
  'PK4',
  'PK6',
  'PK7',
  'Koutio',
  'Auteuil',
  'Normandie',
  'Yahoué',
  'Robinson',
  'Boulari',
  'La Coulée'
];

const emit = defineEmits<{
  (e: 'update:filters', filters: RouteFilters): void;
}>();

const filters = reactive<RouteFilters>({
  province: '',
  commune: '',
  quartier: '',
  minRating: 0
});

watch(filters, (newFilters) => {
  emit('update:filters', { ...newFilters });
}, { deep: true });

const resetFilters = () => {
  filters.province = '';
  filters.commune = '';
  filters.quartier = '';
  filters.minRating = 0;
};
</script>