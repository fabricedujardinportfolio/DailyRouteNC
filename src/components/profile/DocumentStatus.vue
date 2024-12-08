<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="statusClasses"
  >
    {{ statusText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  status?: 'pending' | 'verified' | 'rejected';
}>();

const statusClasses = computed(() => {
  switch (props.status) {
    case 'verified':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-yellow-100 text-yellow-800';
  }
});

const statusText = computed(() => {
  switch (props.status) {
    case 'verified':
      return 'Vérifié';
    case 'rejected':
      return 'Rejeté';
    default:
      return 'En attente';
  }
});
</script>