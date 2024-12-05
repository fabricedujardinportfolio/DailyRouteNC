<template>
  <TransitionRoot appear :show="true" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
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
            <DialogPanel class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                  <DialogTitle as="h2" class="text-xl font-semibold">
                    Ajouter un nouveau trajet
                  </DialogTitle>
                  <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
                    <span class="text-2xl">&times;</span>
                  </button>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Point de départ -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      Point de départ
                    </label>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        v-model="form.startAddress"
                        type="text"
                        required
                        placeholder="Adresse de départ"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <input
                        v-model="form.departureTime"
                        type="time"
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
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        v-model="form.endAddress"
                        type="text"
                        required
                        placeholder="Adresse d'arrivée"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <input
                        v-model="form.estimatedArrivalTime"
                        type="time"
                        required
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <!-- Informations supplémentaires -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Places disponibles
                      </label>
                      <input
                        v-model.number="form.availableSeats"
                        type="number"
                        min="1"
                        required
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Prix par passager (XPF)
                      </label>
                      <input
                        v-model.number="form.price"
                        type="number"
                        min="0"
                        required
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <!-- Fréquence -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      Fréquence
                    </label>
                    <select
                      v-model="form.frequency"
                      required
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="daily">Quotidien</option>
                      <option value="weekdays">Jours ouvrés</option>
                      <option value="custom">Personnalisé</option>
                    </select>
                  </div>

                  <!-- Jours personnalisés (si fréquence = custom) -->
                  <div v-if="form.frequency === 'custom'" class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Jours de la semaine
                    </label>
                    <div class="flex flex-wrap gap-2">
                      <label
                        v-for="day in weekDays"
                        :key="day.value"
                        class="inline-flex items-center"
                      >
                        <input
                          type="checkbox"
                          v-model="form.customDays"
                          :value="day.value"
                          class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        <span class="ml-2 text-sm text-gray-700">{{ day.label }}</span>
                      </label>
                    </div>
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
                      placeholder="Informations supplémentaires pour les passagers..."
                    ></textarea>
                  </div>

                  <!-- Boutons -->
                  <div class="flex justify-end space-x-3">
                    <button
                      type="button"
                      @click="$emit('close')"
                      class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Créer le trajet
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

interface RouteForm {
  startAddress: string;
  endAddress: string;
  departureTime: string;
  estimatedArrivalTime: string;
  availableSeats: number;
  price: number;
  frequency: 'daily' | 'weekdays' | 'custom';
  customDays: string[];
  comments: string;
}

const weekDays = [
  { value: 'monday', label: 'Lundi' },
  { value: 'tuesday', label: 'Mardi' },
  { value: 'wednesday', label: 'Mercredi' },
  { value: 'thursday', label: 'Jeudi' },
  { value: 'friday', label: 'Vendredi' },
  { value: 'saturday', label: 'Samedi' },
  { value: 'sunday', label: 'Dimanche' }
];

const form = reactive<RouteForm>({
  startAddress: '',
  endAddress: '',
  departureTime: '',
  estimatedArrivalTime: '',
  availableSeats: 1,
  price: 0,
  frequency: 'daily',
  customDays: [],
  comments: ''
});

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', data: any): void;
}>();

const handleSubmit = () => {
  const routeData = {
    ...form,
    startLocation: {
      address: form.startAddress,
      // Les coordonnées seront ajoutées plus tard avec un service de géocodage
    },
    endLocation: {
      address: form.endAddress,
      // Les coordonnées seront ajoutées plus tard avec un service de géocodage
    }
  };

  emit('submit', routeData);
};
</script>