<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Rechercher un Trajet</h1>
        <button
          v-if="isDriver"
          @click="showAddRouteModal = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <span class="mr-2">+</span> Ajouter un trajet
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Filtres -->
        <div class="md:col-span-1">
          <RouteFilters @update:filters="updateFilters" />
        </div>

        <!-- Carte et résultats -->
        <div class="md:col-span-3 space-y-6">
          <RouteMap id="recherche_map_trajet" />
          
          <!-- Liste des trajets -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Trajets disponibles</h2>
              
              <div v-if="loading" class="text-center py-8">
                <p class="text-gray-600">Chargement des trajets...</p>
              </div>
              
              <div v-else-if="routes.length === 0" class="text-center py-8 text-gray-500">
                Aucun trajet ne correspond à vos critères de recherche.
              </div>
              
              <div v-else class="space-y-4">
                <div v-for="route in routes" :key="route.id" class="border rounded-lg p-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="font-semibold text-lg">
                        {{ formatLocation(route.start_location) }} → {{ formatLocation(route.end_location) }}
                      </h3>
                      <p class="text-gray-600">
                        {{ formatDateTime(route.departure_time) }}
                      </p>
                      <p class="text-sm text-gray-500 mt-1">
                        Conducteur: {{ route.driver_name }}
                      </p>
                      <div class="flex items-center mt-2">
                        <span class="text-yellow-400 text-sm">★</span>
                        <span class="ml-1 text-sm text-gray-600">
                          {{ route.driver_rating || 'Nouveau' }}
                        </span>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="font-semibold text-lg">{{ formatPrice(route.price) }} XPF</div>
                      <div class="text-sm text-gray-600">
                        {{ route.available_seats }} places disponibles
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal d'ajout de trajet -->
    <AddRouteModal
      v-if="showAddRouteModal"
      @close="showAddRouteModal = false"
      @submit="handleAddRoute"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import RouteMap from '../components/map/RouteMap.vue';
import RouteFilters from '../components/filters/RouteFilters.vue';
import AddRouteModal from '../components/routes/AddRouteModal.vue';
import { addRoute, fetchRoutes } from '../services/routes';
import { formatPrice } from '../utils/priceCalculator';
import type { Route } from '../types/user';

const userStore = useUserStore();
const isDriver = computed(() => userStore.user?.role === 'driver');
const showAddRouteModal = ref(false);
const routes = ref<Route[]>([]);
const loading = ref(false);

const loadRoutes = async () => {
  loading.value = true;
  try {
    routes.value = await fetchRoutes();
  } catch (error) {
    console.error('Erreur lors du chargement des trajets:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadRoutes();
});

const updateFilters = (newFilters: any) => {
  console.log('Nouveaux filtres:', newFilters);
  // Implémenter le filtrage des trajets ici
};

const handleAddRoute = async (routeData: Partial<Route>) => {
  try {
    await addRoute(routeData);
    showAddRouteModal.value = false;
    await loadRoutes(); // Recharger la liste des trajets
  } catch (error) {
    console.error('Erreur lors de l\'ajout du trajet:', error);
  }
};

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatLocation = (location: any) => {
  if (!location) return '';
  const province = location.province_id;
  const commune = location.commune_id;
  const quartier = location.quartier_id;
  return `${commune}${quartier ? `, ${quartier}` : ''}${province ? ` (${province})` : ''}`;
};
</script>