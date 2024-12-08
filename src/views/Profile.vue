<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6">
          <h1 class="text-2xl font-semibold text-gray-900 mb-6">Mon Profil</h1>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Photo de profil -->
            <div class="flex items-center space-x-6">
              <div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  v-if="form.profilePicture"
                  :src="form.profilePicture"
                  alt="Photo de profil"
                  class="w-full h-full object-cover"
                />
                <span v-else class="text-3xl text-gray-400">👤</span>
              </div>
              <button
                type="button"
                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Changer la photo
              </button>
            </div>

            <!-- Informations de base -->
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  disabled
                  class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input
                  type="tel"
                  v-model="form.phoneNumber"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Informations conducteur -->
            <div v-if="isDriver" class="border-t pt-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Informations véhicule</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Modèle du véhicule</label>
                  <input
                    type="text"
                    v-model="form.vehicle.model"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Couleur</label>
                  <input
                    type="text"
                    v-model="form.vehicle.color"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Nombre de places</label>
                  <input
                    type="number"
                    v-model="form.vehicle.seats"
                    required
                    min="1"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Immatriculation</label>
                  <input
                    type="text"
                    v-model="form.vehicle.licensePlate"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <!-- Message d'erreur -->
            <div v-if="error" class="text-red-600 text-sm">
              {{ error }}
            </div>

            <!-- Boutons -->
            <div class="flex justify-end space-x-3">
              <button
                type="button"
                @click="resetForm"
                class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                :disabled="loading"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {{ loading ? 'Enregistrement...' : 'Enregistrer' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import type { User, Driver } from '../types/user';

interface ProfileForm {
  name: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
  vehicle: {
    model: string;
    color: string;
    seats: number;
    licensePlate: string;
  };
}

const userStore = useUserStore();
const loading = computed(() => userStore.loading);
const error = computed(() => userStore.error);
const isDriver = computed(() => userStore.isDriver);

const defaultVehicle = {
  model: '',
  color: '',
  seats: 1,
  licensePlate: '',
};

const form = ref<ProfileForm>({
  name: '',
  email: '',
  phoneNumber: '',
  profilePicture: '',
  vehicle: { ...defaultVehicle },
});

onMounted(() => {
  if (userStore.user) {
    const user = userStore.user;
    form.value = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber || '',
      profilePicture: user.profilePicture || '',
      vehicle: isDriver.value && (user as Driver).vehicle
        ? { ...(user as Driver).vehicle }
        : { ...defaultVehicle },
    };
  }
});

const handleSubmit = async () => {
  try {
    const updateData: Partial<User> = {
      name: form.value.name,
      phoneNumber: form.value.phoneNumber,
      profilePicture: form.value.profilePicture,
    };

    if (isDriver.value) {
      (updateData as Partial<Driver>).vehicle = form.value.vehicle;
    }

    await userStore.updateProfile(updateData);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
  }
};

const resetForm = () => {
  if (userStore.user) {
    const user = userStore.user;
    form.value = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber || '',
      profilePicture: user.profilePicture || '',
      vehicle: isDriver.value && (user as Driver).vehicle
        ? { ...(user as Driver).vehicle }
        : { ...defaultVehicle },
    };
  }
};
</script>