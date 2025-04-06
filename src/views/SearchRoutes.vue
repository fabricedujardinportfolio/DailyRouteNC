<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Rechercher un Trajet</h1>
        <button
          v-if="userStore.isDriver"
          @click="showAddRouteModal = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
        >
          <span>+</span>
          <span>Ajouter un trajet</span>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Filtres -->
        <div class="md:col-span-1">
          <RouteFilters @update:filters="updateFilters" />
        </div>

        <!-- Résultats -->
        <div class="md:col-span-3 space-y-6">
          <!-- Liste des trajets -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Trajets disponibles</h2>
              
              <div v-if="loading" class="text-center py-8">
                <p class="text-gray-600">Chargement des trajets...</p>
              </div>
              
              <div v-else-if="filteredRoutes.length === 0" class="text-center py-8 text-gray-500">
                Aucun trajet ne correspond à vos critères de recherche.
              </div>
              
              <div v-else class="space-y-4">
                <div v-for="route in filteredRoutes" :key="route.id" class="border rounded-lg p-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <!-- Province display -->
                      <div class="text-sm text-gray-500 mb-1">
                        {{ route.startLocation.province_name }}
                      </div>
                      <!-- Detailed location with communes -->
                      <h3 class="font-semibold text-lg">
                        {{ route.startLocation.commune_name || route.startLocation.province_name }}
                        <span class="text-gray-400 mx-2">→</span>
                        {{ route.endLocation.commune_name || route.endLocation.province_name }}
                      </h3>
                      <p class="text-gray-600">
                        {{ formatDateTime(route.departureTime) }}
                      </p>
                      <div class="text-sm text-gray-600">
                        {{ route.availableSeats }} {{ route.availableSeats > 1 ? 'places disponibles' : 'place disponible' }}
                        <span v-if="route.bookings_count > 0" class="text-blue-600">
                          • {{ route.bookings_count }} {{ route.bookings_count > 1 ? 'réservations' : 'réservation' }}
                        </span>
                        • {{ route.minimum_tokens }} {{ route.minimum_tokens > 1 ? 'jetons' : 'jeton' }}
                      </div>
                      <p v-if="route.comments" class="text-sm text-gray-500 mt-2">
                        {{ route.comments }}
                      </p>
                    </div>
                    <div class="flex flex-col items-end">
                      <div v-if="route.driver_id === userStore.user?.id" class="flex space-x-2">
                        <button
                          @click="handleDeleteRoute(route)"
                          class="text-red-600 hover:text-red-700 text-sm px-3 py-1 border border-red-600 rounded hover:bg-red-50"
                        >
                          Supprimer
                        </button>
                      </div>
                      <button
                        v-else-if="canBook && !route.is_booked"
                        @click="handleBookRoute(route)"
                        :disabled="loading || !hasEnoughTokens(route)"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {{ hasEnoughTokens(route) ? 'Réserver' : 'Jetons insuffisants' }}
                      </button>
                      <div
                        v-else-if="route.is_booked"
                        class="text-green-600 text-sm font-medium"
                      >
                        Réservé
                      </div>
                    </div>
                  </div>

                  <!-- Afficher les réservations si c'est le conducteur -->
                  <div v-if="route.driver_id === userStore.user?.id" class="mt-4 border-t pt-4">
                    <RouteBookings 
                      :route-id="route.id" 
                      @booking-updated="loadRoutes"
                    />
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
      @routeAdded="handleRouteAdded"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../stores/user';
import RouteFilters from '../components/filters/RouteFilters.vue';
import AddRouteModal from '../components/routes/AddRouteModal.vue';
import RouteBookings from '../components/routes/RouteBookings.vue';
import { fetchRoutes, deleteRoute, bookRoute } from '../services/supabase/routes';
import type { Route } from '../types/user';

const userStore = useUserStore();
const showAddRouteModal = ref(false);
const routes = ref<Route[]>([]);
const loading = ref(false);

const filters = ref({
  province: '',
  commune: '',
  quartier: '',
  departureDate: '',
  maxPrice: 0,
  minSeats: 1
});

const canBook = computed(() => {
  return !userStore.isDriver || userStore.user?.role === 'double_role';
});

const filteredRoutes = computed(() => {
  return routes.value.filter(route => {
    // Filter by province
    if (filters.value.province && route.startLocation.province !== filters.value.province) {
      return false;
    }

    // Filter by commune
    if (filters.value.commune && route.startLocation.commune !== filters.value.commune) {
      return false;
    }

    // Filter by quartier
    if (filters.value.quartier && route.startLocation.quartier !== filters.value.quartier) {
      return false;
    }

    // Filter by departure date
    if (filters.value.departureDate) {
      const filterDate = new Date(filters.value.departureDate);
      const routeDate = new Date(route.departureTime);
      if (filterDate.toDateString() !== routeDate.toDateString()) {
        return false;
      }
    }

    // Filter by minimum tokens
    if (filters.value.maxPrice > 0 && route.minimum_tokens > filters.value.maxPrice) {
      return false;
    }

    // Filter by available seats
    if (route.availableSeats < filters.value.minSeats) {
      return false;
    }

    return true;
  });
});

const hasEnoughTokens = (route: Route) => {
  return userStore.tokenBalance >= (route.minimum_tokens || 1);
};

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

const updateFilters = (newFilters: any) => {
  filters.value = newFilters;
};

const handleRouteAdded = async () => {
  await loadRoutes();
};

const handleDeleteRoute = async (route: Route) => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer ce trajet ?')) {
    return;
  }

  try {
    await deleteRoute(route.id);
    routes.value = routes.value.filter(r => r.id !== route.id);
  } catch (error) {
    console.error('Erreur lors de la suppression du trajet:', error);
    alert('Erreur lors de la suppression du trajet');
  }
};

const handleBookRoute = async (route: Route) => {
  try {
    loading.value = true;
    await bookRoute(route.id);
    await loadRoutes(); // Refresh routes to update available seats and booking status
    alert('Réservation effectuée avec succès !');
  } catch (error: any) {
    console.error('Erreur lors de la réservation:', error);
    if (error.message.includes('Insufficient tokens')) {
      alert('Vous n\'avez pas assez de jetons pour cette réservation');
    } else {
      alert('Erreur lors de la réservation');
    }
  } finally {
    loading.value = false;
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

// Load initial data
loadRoutes();
</script>