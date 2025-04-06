<template>
  <div class="space-y-6">
    <!-- Résumé des gains -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Résumé des gains</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-sm text-gray-600">Gains totaux</div>
          <div class="text-2xl font-bold text-gray-900">
            {{ formatPrice(driverStats.earnings.total) }} XPF
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-sm text-gray-600">Commission DailyRouteNC</div>
          <div class="text-2xl font-bold text-red-600">
            -{{ formatPrice(driverStats.earnings.commission) }} XPF
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-sm text-gray-600">Gains nets</div>
          <div class="text-2xl font-bold text-green-600">
            {{ formatPrice(driverStats.earnings.net) }} XPF
          </div>
        </div>
      </div>
    </div>

    <!-- Trajets à venir -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Trajets à venir</h2>
      <div class="space-y-4">
        <div
          v-for="trip in driverStats.upcomingTrips"
          :key="trip.id"
          class="p-4 bg-gray-50 rounded-lg"
        >
          <div class="flex justify-between items-start">
            <div>
              <div class="font-medium text-gray-900">
                {{ trip.startLocation }} → {{ trip.endLocation }}
              </div>
              <div class="text-sm text-gray-600">
                {{ formatDate(trip.date) }} • {{ trip.bookings_count }}/{{ trip.maxPassengers }} passagers
              </div>
              <!-- Nouvelles réservations -->
              <div v-if="trip.new_bookings && trip.new_bookings.length > 0" class="mt-2">
                <div class="text-sm font-medium text-blue-600">
                  Nouvelles réservations :
                </div>
                <ul class="mt-1 space-y-1">
                  <li v-for="booking in trip.new_bookings" :key="booking.id" class="text-sm text-gray-600">
                    {{ booking.user_name }} • {{ formatDateTime(booking.created_at) }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-right">
              <div class="font-medium text-gray-900">{{ formatPrice(trip.price) }} XPF</div>
              <div class="text-sm text-gray-600">par passager</div>
            </div>
          </div>
        </div>
        
        <div v-if="driverStats.upcomingTrips.length === 0" class="text-center text-gray-600 py-4">
          Aucun trajet prévu
        </div>
      </div>
    </div>

    <!-- Statistiques supplémentaires -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Performance</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <div class="text-gray-600">Trajets complétés</div>
            <div class="font-medium text-gray-900">{{ driverStats.completedTrips }}</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-gray-600">Passagers transportés</div>
            <div class="font-medium text-gray-900">{{ driverStats.totalPassengers }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '../../utils/priceCalculator';
import type { DriverStats } from '../../types/dashboard';

defineProps<{
  driverStats: DriverStats;
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

const formatDateTime = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>