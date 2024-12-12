<template>
  <!-- ... début du template inchangé ... -->
  
  <!-- Point de départ -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Point de départ
    </label>
    <div class="space-y-4">
      <LocationSelector v-model="form.startLocation" />
      <input
        v-model="form.departureTime"
        type="datetime-local"
        required
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  </div>

  <!-- Point d'arrivée -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Point d'arrivée
    </label>
    <div class="space-y-4">
      <LocationSelector v-model="form.endLocation" />
      <input
        v-model="form.estimatedArrivalTime"
        type="datetime-local"
        required
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  </div>

  <!-- ... reste du template inchangé ... -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores/user';
import LocationSelector from '../location/LocationSelector.vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

interface LocationForm {
  province: string;
  commune: string;
}

interface RouteForm {
  startLocation: LocationForm;
  endLocation: LocationForm;
  departureTime: string;
  estimatedArrivalTime: string;
  availableSeats: number;
  price: number;
  comments: string;
}

const userStore = useUserStore();
const loading = ref(false);
const error = ref('');

const form = ref<RouteForm>({
  startLocation: { province: '', commune: '' },
  endLocation: { province: '', commune: '' },
  departureTime: '',
  estimatedArrivalTime: '',
  availableSeats: 1,
  price: 0,
  comments: ''
});

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', data: any): void;
}>();

const handleSubmit = async () => {
  if (!userStore.user) return;

  loading.value = true;
  error.value = '';

  try {
    const routeData = {
      driverId: userStore.user.id,
      driverName: userStore.user.name,
      startLocation: {
        province: form.value.startLocation.province,
        commune: form.value.startLocation.commune,
      },
      endLocation: {
        province: form.value.endLocation.province,
        commune: form.value.endLocation.commune,
      },
      departureTime: new Date(form.value.departureTime).toISOString(),
      estimatedArrivalTime: new Date(form.value.estimatedArrivalTime).toISOString(),
      availableSeats: form.value.availableSeats,
      price: form.value.price,
      comments: form.value.comments,
    };

    emit('submit', routeData);
  } catch (err) {
    error.value = 'Une erreur est survenue lors de la création du trajet';
    console.error('Erreur lors de la création du trajet:', err);
  } finally {
    loading.value = false;
  }
};
</script>