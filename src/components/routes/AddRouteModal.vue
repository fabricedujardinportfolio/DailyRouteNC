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
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Province</label>
                      <select
                        v-model="form.startLocation.province"
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option v-for="province in provinces" :key="province.id" :value="province.id">
                          {{ province.name }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Commune</label>
                      <select
                        v-model="form.startLocation.commune"
                        required
                        :disabled="!form.startLocation.province"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez une commune</option>
                        <option v-for="commune in startCommunes" :key="commune.id" :value="commune.id">
                          {{ commune.name }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Quartier</label>
                      <select
                        v-model="form.startLocation.quartier"
                        :disabled="!form.startLocation.commune"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez un quartier (optionnel)</option>
                        <option v-for="quartier in startQuartiers" :key="quartier.id" :value="quartier.id">
                          {{ quartier.name }}
                        </option>
                      </select>
                    </div>
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
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Province</label>
                      <select
                        v-model="form.endLocation.province"
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option v-for="province in provinces" :key="province.id" :value="province.id">
                          {{ province.name }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Commune</label>
                      <select
                        v-model="form.endLocation.commune"
                        required
                        :disabled="!form.endLocation.province"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez une commune</option>
                        <option v-for="commune in endCommunes" :key="commune.id" :value="commune.id">
                          {{ commune.name }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Quartier</label>
                      <select
                        v-model="form.endLocation.quartier"
                        :disabled="!form.endLocation.commune"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez un quartier (optionnel)</option>
                        <option v-for="quartier in endQuartiers" :key="quartier.id" :value="quartier.id">
                          {{ quartier.name }}
                        </option>
                      </select>
                    </div>
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
import { ref, computed, onMounted, watch } from 'vue';
import { useUserStore } from '../../stores/user';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { fetchProvinces, fetchCommunes, fetchQuartiers, type Province, type Commune, type Quartier } from '../../services/supabase/reference';
import { addRoute } from '../../services/supabase/routes';

interface LocationForm {
  province: string;
  commune: string;
  quartier?: string;
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

// Données de référence
const provinces = ref<Province[]>([]);
const communes = ref<Commune[]>([]);
const quartiers = ref<Quartier[]>([]);

// Chargement des données de référence
onMounted(async () => {
  try {
    const [provincesData, communesData, quartiersData] = await Promise.all([
      fetchProvinces(),
      fetchCommunes(),
      fetchQuartiers()
    ]);
    provinces.value = provincesData;
    communes.value = communesData;
    quartiers.value = quartiersData;
    
    // Définir la première province comme valeur par défaut
    if (provincesData.length > 0) {
      form.value.startLocation.province = provincesData[0].id;
      form.value.endLocation.province = provincesData[0].id;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données de référence:', error);
  }
});

const form = ref<RouteForm>({
  startLocation: { province: '', commune: '', quartier: '' },
  endLocation: { province: '', commune: '', quartier: '' },
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

// Computed properties pour filtrer les communes et quartiers
const startCommunes = computed(() => {
  if (!form.value.startLocation.province) return [];
  return communes.value.filter(c => c.province_id === form.value.startLocation.province);
});

const startQuartiers = computed(() => {
  if (!form.value.startLocation.commune) return [];
  return quartiers.value.filter(q => q.commune_id === form.value.startLocation.commune);
});

const endCommunes = computed(() => {
  if (!form.value.endLocation.province) return [];
  return communes.value.filter(c => c.province_id === form.value.endLocation.province);
});

const endQuartiers = computed(() => {
  if (!form.value.endLocation.commune) return [];
  return quartiers.value.filter(q => q.commune_id === form.value.endLocation.commune);
});

// Reset des sélections dépendantes
watch(() => form.value.startLocation.province, () => {
  form.value.startLocation.commune = '';
  form.value.startLocation.quartier = '';
});

watch(() => form.value.startLocation.commune, () => {
  form.value.startLocation.quartier = '';
});

watch(() => form.value.endLocation.province, () => {
  form.value.endLocation.commune = '';
  form.value.endLocation.quartier = '';
});

watch(() => form.value.endLocation.commune, () => {
  form.value.endLocation.quartier = '';
});

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
      departureTime: form.value.departureTime,
      estimatedArrivalTime: form.value.estimatedArrivalTime,
      availableSeats: form.value.availableSeats,
      price: form.value.price,
      comments: form.value.comments
    };

    const newRoute = await addRoute(routeData);
    emit('submit', newRoute);
    emit('close');
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