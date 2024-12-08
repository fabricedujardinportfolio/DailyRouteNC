<template>
  <div class="space-y-6">
    <!-- Résumé des dépenses -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Résumé des dépenses</h2>
      <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-600">Total dépensé</div>
        <div class="text-2xl font-bold text-gray-900">{{ formatPrice(walkerStats.totalSpent) }} XPF</div>
      </div>
    </div>

    <!-- Trajets à venir -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Mes réservations</h2>
      <div class="space-y-4">
        <div
          v-for="trip in walkerStats.upcomingTrips"
          :key="trip.id"
          class="p-4 bg-gray-50 rounded-lg"
        >
          <div class="flex justify-between items-start">
            <div>
              <div class="font-medium text-gray-900">
                {{ trip.startLocation }} → {{ trip.endLocation }}
              </div>
              <div class="text-sm text-gray-600">
                {{ formatDate(trip.date) }} • Conducteur: {{ trip.driverName }}
              </div>
            </div>
            <div class="text-right">
              <div class="font-medium text-gray-900">{{ trip.tokens }} jetons</div>
            </div>
          </div>
        </div>
        
        <div v-if="walkerStats.upcomingTrips.length === 0" class="text-center text-gray-600 py-4">
          Aucune réservation
        </div>
      </div>
    </div>

    <!-- Conducteurs favoris -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Conducteurs favoris</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="driver in walkerStats.favoriteDrivers"
          :key="driver.id"
          class="p-4 bg-gray-50 rounded-lg flex items-center space-x-4"
        >
          <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              v-if="driver.profilePicture"
              :src="driver.profilePicture"
              :alt="driver.name"
              class="w-full h-full rounded-full object-cover"
            />
            <span v-else class="text-2xl">👤</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">{{ driver.name }}</div>
            <div class="text-sm text-gray-600">
              {{ driver.rating }}/5 ⭐ • {{ driver.totalTrips }} trajets
            </div>
          </div>
        </div>
        
        <div v-if="walkerStats.favoriteDrivers.length === 0" class="text-center text-gray-600 py-4">
          Aucun conducteur favori
        </div>
      </div>
    </div>

    <!-- Trajets enregistrés -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Trajets enregistrés</h2>
      <div class="space-y-4">
        <div
          v-for="route in walkerStats.savedRoutes"
          :key="route.id"
          class="p-4 bg-gray-50 rounded-lg"
        >
          <div class="flex justify-between items-center">
            <div>
              <div class="font-medium text-gray-900">
                {{ route.startLocation }} → {{ route.endLocation }}
              </div>
              <div class="text-sm text-gray-600">
                {{ route.frequency }} • {{ route.availableSeats }} places disponibles
              </div>
            </div>
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              @click="bookRoute(route.id)"
            >
              Réserver
            </button>
          </div>
        </div>
        
        <div v-if="walkerStats.savedRoutes.length === 0" class="text-center text-gray-600 py-4">
          Aucun trajet enregistré
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '../../utils/priceCalculator';
import type { WalkerStats } from '../../types/dashboard';

defineProps<{
  walkerStats: WalkerStats;
}>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const bookRoute = async (routeId: string) => {
  // Implémenter la logique de réservation
  console.log('Réservation du trajet:', routeId);
};
</script>