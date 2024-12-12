<template>
  <div class="space-y-4">
    <!-- Sélection de la province -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Province
      </label>
      <select
        v-model="selectedProvince"
        required
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Sélectionnez une province</option>
        <option v-for="province in provinces" :key="province" :value="province">
          {{ province }}
        </option>
      </select>
    </div>

    <!-- Sélection de la commune -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Commune
      </label>
      <select
        v-model="selectedCommune"
        required
        :disabled="!selectedProvince"
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Sélectionnez une commune</option>
        <option
          v-for="commune in availableCommunes"
          :key="commune"
          :value="commune"
        >
          {{ commune }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { PROVINCES, COMMUNES_BY_PROVINCE } from '@/constants/locations';

const props = defineProps<{
  modelValue?: {
    province: string;
    commune: string;
  };
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: { province: string; commune: string }): void;
}>();

const provinces = Object.values(PROVINCES);
const selectedProvince = ref(props.modelValue?.province || '');
const selectedCommune = ref(props.modelValue?.commune || '');

const availableCommunes = computed(() => {
  return selectedProvince.value ? COMMUNES_BY_PROVINCE[selectedProvince.value] : [];
});

watch([selectedProvince, selectedCommune], ([province, commune]) => {
  emit('update:modelValue', { province, commune });
  
  // Réinitialiser la commune si la province change
  if (province !== props.modelValue?.province) {
    selectedCommune.value = '';
  }
});
</script>