<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Statistiques</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-600">Trajets totaux</div>
        <div class="text-2xl font-bold text-gray-900">{{ stats.totalTrips }}</div>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-600">Distance totale</div>
        <div class="text-2xl font-bold text-gray-900">{{ stats.totalDistance }} km</div>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-600">Note moyenne</div>
        <div class="text-2xl font-bold text-gray-900">{{ stats.averageRating }}/5</div>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-600">Jetons</div>
        <div class="text-2xl font-bold text-gray-900">{{ stats.tokensBalance }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DashboardStats } from '../../types/dashboard';

defineProps<{
  stats: DashboardStats;
}>();
</script>