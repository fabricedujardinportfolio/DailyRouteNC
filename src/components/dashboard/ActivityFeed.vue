<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Activité récente</h2>
    <div class="space-y-4">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center"
          :class="getActivityIconClass(activity.type)"
        >
          {{ getActivityIcon(activity.type) }}
        </div>
        <div class="flex-1">
          <div class="text-sm text-gray-900">{{ activity.description }}</div>
          <div class="text-xs text-gray-600">{{ formatDate(activity.date) }}</div>
        </div>
      </div>
      
      <div v-if="activities.length === 0" class="text-center text-gray-600 py-4">
        Aucune activité récente
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Activity } from '../../types/dashboard';

const props = defineProps<{
  activities: Activity[];
}>();

const getActivityIcon = (type: string) => {
  const icons: Record<string, string> = {
    trip: '🚗',
    booking: '📅',
    payment: '💰',
    rating: '⭐',
    tokens: '🎫'
  };
  return icons[type] || '📝';
};

const getActivityIconClass = (type: string) => {
  const classes: Record<string, string> = {
    trip: 'bg-blue-100 text-blue-600',
    booking: 'bg-green-100 text-green-600',
    payment: 'bg-yellow-100 text-yellow-600',
    rating: 'bg-purple-100 text-purple-600',
    tokens: 'bg-indigo-100 text-indigo-600'
  };
  return classes[type] || 'bg-gray-100 text-gray-600';
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>