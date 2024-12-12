<template>
  <TransitionRoot appear show as="template">
    <Dialog as="div" @close="emit('close')" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 mb-4">
                Ajouter un trajet
              </DialogTitle>

              <form @submit.prevent="handleSubmit" class="space-y-6">
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

                <!-- Places disponibles -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Places disponibles
                  </label>
                  <input
                    type="number"
                    v-model="form.availableSeats"
                    min="1"
                    max="8"
                    required
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <!-- Prix par place -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Prix par place (XPF)
                  </label>
                  <input
                    type="number"
                    v-model="form.price"
                    min="0"
                    required
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <!-- Commentaires -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Commentaires (optionnel)
                  </label>
                  <textarea
                    v-model="form.comments"
                    rows="3"
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>

                <!-- Message d'erreur -->
                <div v-if="error" class="text-red-600 text-sm">
                  {{ error }}
                </div>

                <!-- Boutons -->
                <div class="flex justify-end space-x-3">
                  <button
                    type="button"
                    @click="emit('close')"
                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    :disabled="loading"
                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {{ loading ? 'Création...' : 'Créer le trajet' }}
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
    // Validation des données
    if (!form.value.startLocation.commune || !form.value.endLocation.commune) {
      throw new Error('Veuillez sélectionner les lieux de départ et d\'arrivée');
    }

    if (new Date(form.value.departureTime) <= new Date()) {
      throw new Error('La date de départ doit être dans le futur');
    }

    if (new Date(form.value.estimatedArrivalTime) <= new Date(form.value.departureTime)) {
      throw new Error('L\'heure d\'arrivée estimée doit être après l\'heure de départ');
    }

    const routeData = {
      driverId: userStore.user.id,
      driverName: userStore.user.name,
      startLocation: form.value.startLocation,
      endLocation: form.value.endLocation,
      departureTime: new Date(form.value.departureTime).toISOString(),
      estimatedArrivalTime: new Date(form.value.estimatedArrivalTime).toISOString(),
      availableSeats: form.value.availableSeats,
      price: form.value.price,
      comments: form.value.comments,
      status: 'active',
      createdAt: new Date().toISOString()
    };

    emit('submit', routeData);
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = 'Une erreur est survenue lors de la création du trajet';
    }
    console.error('Erreur lors de la création du trajet:', err);
  } finally {
    loading.value = false;
  }
};
</script>