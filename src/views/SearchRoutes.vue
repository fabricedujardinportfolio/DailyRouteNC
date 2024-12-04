<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900 mb-6">Rechercher un Trajet</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Filtres -->
        <div class="md:col-span-1">
          <RouteFilters @update:filters="updateFilters" />
        </div>

        <!-- Carte et résultats -->
        <div class="md:col-span-3 space-y-6">
          <RouteMap />
          
          <!-- Liste des trajets -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Trajets disponibles</h2>
              
              <div v-if="routes.length === 0" class="text-center py-8 text-gray-500">
                Aucun trajet ne correspond à vos critères de recherche.
              </div>
              
              <div v-else class="space-y-4">
                <div v-for="route in routes" :key="route.id" class="border rounded-lg p-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="font-semibold text-lg">{{ route.startLocation.address }} → {{ route.endLocation.address }}</h3>
                      <p class="text-gray-600">{{ formatTime(route.departureTime) }}</p>
                      <div class="flex items-center mt-2">
                        <span class="text-yellow-400 text-sm">★</span>
                        <span class="ml-1 text-sm text-gray-600">{{ route.driverRating }}/5</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="font-semibold text-lg">{{ route.price }} XPF</div>
                      <div class="text-sm text-gray-600">{{ route.availableSeats }} places disponibles</div>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RouteMap from '../components/map/RouteMap.vue';
import RouteFilters from '../components/filters/RouteFilters.vue';
import type { Route } from '../types/user';

// Données de test pour la démonstration
const routes = ref<Route[]>([]);

const updateFilters = (newFilters: any) => {
  // La logique de filtrage sera implémentée plus tard
  console.log('Nouveaux filtres:', newFilters);
};

const formatTime = (time: string) => {
  return new Date(time).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>