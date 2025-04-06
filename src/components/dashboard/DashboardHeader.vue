<template>
  <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">
          Bonjour, {{ user?.name }}
        </h1>
        <p class="text-gray-600">{{ welcomeMessage }}</p>
      </div>
      <div class="text-right">
        <div class="text-lg font-semibold text-gray-900">
          Solde: {{ userStore.tokenBalance }} jetons
        </div>
        <router-link
          to="/tokens-shop"
          class="text-blue-600 hover:text-blue-700 text-sm"
        >
          Recharger mon compte
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../../stores/user';
import type { User } from '../../types/user';

const props = defineProps<{
  user: User | null;
}>();

const userStore = useUserStore();

const welcomeMessage = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bonne matinée';
  if (hour < 18) return 'Bon après-midi';
  return 'Bonne soirée';
});
</script>