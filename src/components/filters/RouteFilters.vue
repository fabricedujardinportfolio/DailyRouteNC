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
        <option v-for="province in provinces" :key="province.id" :value="province.id">
          {{ province.name }}
        </option>
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
        <option v-for="commune in filteredCommunes" :key="commune.id" :value="commune.id">
          {{ commune.name }}
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
        <option v-for="quartier in filteredQuartiers" :key="quartier.id" :value="quartier.id">
          {{ quartier.name }}
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
import { ref, reactive, watch, onMounted, computed } from 'vue';
import { fetchProvinces, fetchCommunes, fetchQuartiers, type Province, type Commune, type Quartier } from '../../services/supabase/reference';

interface RouteFilters {
  province: string;
  commune: string;
  quartier: string;
  minRating: number;
}

const emit = defineEmits<{
  (e: 'update:filters', filters: RouteFilters): void;
}>();

const provinces = ref<Province[]>([]);
const communes = ref<Commune[]>([]);
const quartiers = ref<Quartier[]>([]);

const filters = reactive<RouteFilters>({
  province: '',
  commune: '',
  quartier: '',
  minRating: 0
});

const filteredCommunes = computed(() => {
  if (!filters.province) return communes.value;
  return communes.value.filter(c => c.province_id === filters.province);
});

const filteredQuartiers = computed(() => {
  if (!filters.commune) return quartiers.value;
  return quartiers.value.filter(q => q.commune_id === filters.commune);
});

onMounted(async () => {
  try {
    const [provincesData, communesData, quartiersData] = await Promise.all([
      fetchProvinces(),
      fetchCommunes(),
      fetchQuartiers()
    ]);
    provinces.value = provincesData;
    communes.value = communesData;
    quartiers.value = quartiersData;
  } catch (error) {
    console.error('Erreur lors du chargement des données de référence:', error);
  }
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