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
            <DialogPanel class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 mb-4">
                Ajouter un trajet
              </DialogTitle>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Point de départ -->
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Province de départ
                      </label>
                      <select
                        v-model="form.startLocation.province"
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez une province</option>
                        <option v-for="province in provinces" :key="province.id" :value="province.id">
                          {{ province.name }}
                        </option>
                      </select>
                    </div>

                    <div v-if="form.startLocation.province">
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        {{ isProvinceIles ? 'Île de départ' : 'Commune de départ' }}
                      </label>
                      <select
                        v-model="form.startLocation.commune"
                        :required="isProvinceIles"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">{{ isProvinceIles ? 'Sélectionnez une île' : 'Sélectionnez une commune' }}</option>
                        <option v-for="commune in startCommunes" :key="commune.id" :value="commune.id">
                          {{ commune.name }}
                        </option>
                      </select>
                    </div>

                    <div v-if="form.startLocation.commune">
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Quartier de départ
                      </label>
                      <select
                        v-model="form.startLocation.quartier"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez un quartier</option>
                        <option v-for="quartier in startQuartiers" :key="quartier.id" :value="quartier.id">
                          {{ quartier.name }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">Heure de départ</label>
                      <input
                        v-model="form.departureTime"
                        type="datetime-local"
                        required
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <!-- Point d'arrivée -->
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Province d'arrivée
                      </label>
                      <select
                        v-model="form.endLocation.province"
                        required
                        disabled
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez une province</option>
                        <option v-for="province in provinces" :key="province.id" :value="province.id">
                          {{ province.name }}
                        </option>
                      </select>
                    </div>

                    <div v-if="form.endLocation.province">
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        {{ isProvinceIles ? 'Île d\'arrivée' : 'Commune d\'arrivée' }}
                      </label>
                      <select
                        v-model="form.endLocation.commune"
                        :required="isProvinceIles"
                        :disabled="isProvinceIles"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">{{ isProvinceIles ? 'Sélectionnez une île' : 'Sélectionnez une commune' }}</option>
                        <option v-for="commune in endCommunes" :key="commune.id" :value="commune.id">
                          {{ commune.name }}
                        </option>
                      </select>
                    </div>

                    <div v-if="form.endLocation.commune">
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Quartier d'arrivée
                      </label>
                      <select
                        v-model="form.endLocation.quartier"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez un quartier</option>
                        <option v-for="quartier in endQuartiers" :key="quartier.id" :value="quartier.id">
                          {{ quartier.name }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">Heure d'arrivée estimée</label>
                      <input
                        v-model="form.estimatedArrivalTime"
                        type="datetime-local"
                        required
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
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

                <!-- Prix en jetons -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Prix (en jetons)
                  </label>
                  <input
                    type="number"
                    v-model="form.price"
                    min="1"
                    required
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p class="mt-1 text-sm text-gray-500">
                    Minimum 1 jeton par trajet
                  </p>
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
import { supabase } from '../../services/supabase';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { 
  fetchProvinces, 
  fetchCommunes, 
  fetchQuartiers,
  type Province,
  type Commune,
  type Quartier
} from '../../services/supabase/reference';
import { addRoute } from '../../services/supabase/routes';

interface LocationForm {
  province: string;
  commune?: string;
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

// Set default dates
const now = new Date();
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);

// Format date for input
const formatDateForInput = (date: Date) => {
  return date.toISOString().slice(0, 16);
};

// Reference data
const provinces = ref<Province[]>([]);
const communes = ref<Commune[]>([]);
const quartiers = ref<Quartier[]>([]);

const form = ref<RouteForm>({
  startLocation: { province: '' },
  endLocation: { province: '' },
  departureTime: formatDateForInput(tomorrow),
  estimatedArrivalTime: formatDateForInput(new Date(tomorrow.getTime() + 2 * 60 * 60 * 1000)),
  availableSeats: 1,
  price: 1,
  comments: ''
});

// Computed properties for filtered locations
const startCommunes = computed(() => {
  return communes.value.filter(c => c.province_id === form.value.startLocation.province);
});

const endCommunes = computed(() => {
  return communes.value.filter(c => c.province_id === form.value.endLocation.province);
});

const startQuartiers = computed(() => {
  return quartiers.value.filter(q => q.commune_id === form.value.startLocation.commune);
});

const endQuartiers = computed(() => {
  return quartiers.value.filter(q => q.commune_id === form.value.endLocation.commune);
});

// Watch for province changes
watch(() => form.value.startLocation.province, (newProvince) => {
  if (newProvince) {
    form.value.endLocation.province = newProvince;
    form.value.startLocation.commune = undefined;
    form.value.startLocation.quartier = undefined;
    form.value.endLocation.commune = undefined;
    form.value.endLocation.quartier = undefined;
  }
});

// Watch for commune changes in Province des Îles
watch(() => form.value.startLocation.commune, (newCommune) => {
  form.value.startLocation.quartier = undefined;
  
  if (isProvinceIles.value && newCommune) {
    form.value.endLocation.commune = newCommune;
  }
});

watch(() => form.value.endLocation.commune, () => {
  form.value.endLocation.quartier = undefined;
});

// Computed property to check if it's Province des Îles
const isProvinceIles = computed(() => {
  const selectedProvince = provinces.value.find(p => p.id === form.value.startLocation.province);
  return selectedProvince?.name === 'Province des Îles';
});

// Load reference data
onMounted(async () => {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      error.value = 'Veuillez vous connecter pour ajouter un trajet';
      return;
    }

    if (!userStore.isDriver) {
      error.value = 'Seuls les conducteurs peuvent ajouter des trajets';
      return;
    }

    const [provincesData, communesData, quartiersData] = await Promise.all([
      fetchProvinces(),
      fetchCommunes(),
      fetchQuartiers()
    ]);

    provinces.value = provincesData;
    communes.value = communesData;
    quartiers.value = quartiersData;
  } catch (error) {
    console.error('Erreur lors du chargement des données de référence:', error);
  }
});

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'routeAdded'): void;
}>();

const handleSubmit = async () => {
  try {
    loading.value = true;
    error.value = '';

    // Validate required fields
    if (!form.value.startLocation.province || !form.value.endLocation.province) {
      throw new Error('Veuillez sélectionner les provinces de départ et d\'arrivée');
    }

    if (isProvinceIles.value && (!form.value.startLocation.commune || !form.value.endLocation.commune)) {
      throw new Error('La sélection d\'une île est obligatoire pour la Province des Îles');
    }

    if (!form.value.departureTime) {
      throw new Error('L\'heure de départ est obligatoire');
    }

    const departureTime = new Date(form.value.departureTime);
    if (departureTime <= new Date()) {
      throw new Error('La date de départ doit être dans le futur');
    }

    if (!form.value.estimatedArrivalTime) {
      throw new Error('L\'heure d\'arrivée estimée est obligatoire');
    }

    const estimatedArrivalTime = new Date(form.value.estimatedArrivalTime);
    if (estimatedArrivalTime <= departureTime) {
      throw new Error('L\'heure d\'arrivée estimée doit être après l\'heure de départ');
    }

    if (form.value.price < 1) {
      throw new Error('Le prix minimum est de 1 jeton');
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('vehicle')
      .eq('id', userStore.user?.id)
      .single();

    const maxSeats = profile?.vehicle?.seats || 1;
    if (form.value.availableSeats > maxSeats) {
      throw new Error(`Le nombre de places ne peut pas dépasser ${maxSeats}`);
    }

    const routeData = {
      startLocation: {
        province: form.value.startLocation.province,
        commune: form.value.startLocation.commune,
        quartier: form.value.startLocation.quartier
      },
      endLocation: {
        province: form.value.endLocation.province,
        commune: form.value.endLocation.commune,
        quartier: form.value.endLocation.quartier
      },
      departureTime: form.value.departureTime,
      estimatedArrivalTime: form.value.estimatedArrivalTime,
      availableSeats: form.value.availableSeats,
      price: form.value.price,
      minimum_tokens: form.value.price,
      comments: form.value.comments
    };

    await addRoute(routeData);
    emit('routeAdded');
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