<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6">
          <h1 class="text-2xl font-semibold text-gray-900 mb-6">Mon Profil</h1>
          
          <div v-if="loading" class="text-center py-8">
            <p class="text-gray-600">Chargement du profil...</p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
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
                @click="handleProfilePictureUpload"
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

              <!-- Sélection du rôle -->
              <div>
                <label class="block text-sm font-medium text-gray-700">Type de compte</label>
                <select
                  v-model="selectedRole"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  :disabled="loading || form.documents?.status === 'verified'"
                >
                  <option v-for="role in roles" :key="role.name" :value="role.name">
                    {{ role.description }}
                  </option>
                </select>
                <p v-if="form.documents?.status === 'verified'" class="mt-1 text-sm text-gray-500">
                  Le type de compte ne peut plus être modifié une fois vérifié
                </p>
              </div>
            </div>

            <!-- Documents requis -->
            <div class="border-t pt-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Documents requis</h2>
              
              <!-- Pièce d'identité (pour tous) -->
              <DocumentUpload
                title="Pièce d'identité"
                :document="form.documents.identityCard"
                @upload="handleDocumentUpload('identityCard', $event)"
                class="mb-6"
              />

              <!-- Documents spécifiques aux conducteurs -->
              <template v-if="isDriver">
                <DocumentUpload
                  title="Permis de conduire"
                  :document="form.documents.driverLicense"
                  @upload="handleDocumentUpload('driverLicense', $event)"
                  class="mb-6"
                />
                
                <DocumentUpload
                  title="Carte grise"
                  :document="form.documents.vehicleRegistration"
                  @upload="handleDocumentUpload('vehicleRegistration', $event)"
                  class="mb-6"
                />
                
                <DocumentUpload
                  title="Attestation d'assurance"
                  :document="form.documents.insurance"
                  @upload="handleDocumentUpload('insurance', $event)"
                  class="mb-6"
                />

                <!-- Informations véhicule -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
              </template>
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
import { ref, computed, onMounted, watch } from 'vue';
import { useUserStore } from '../stores/user';
import type { User, Driver, UserDocuments } from '../types/user';
import DocumentUpload from '../components/profile/DocumentUpload.vue';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { supabase } from '../services/supabase';

interface UserRoleData {
  roles: {
    name: 'driver' | 'walker' | 'double_role';
  }
}

interface ProfileForm {
  name: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
  role: User['role'];
  documents: UserDocuments;
  vehicle: {
    model: string;
    color: string;
    seats: number;
    licensePlate: string;
  };
}

const userStore = useUserStore();
const loading = ref(false);
const error = ref('');
const selectedRole = ref<User['role']>('walker');
const roles = ref<{ name: string; description: string; }[]>([]);

const defaultVehicle = {
  model: '',
  color: '',
  seats: 1,
  licensePlate: '',
};

const defaultDocuments: UserDocuments = {
  status: 'pending'
};

const form = ref<ProfileForm>({
  name: '',
  email: '',
  phoneNumber: '',
  profilePicture: '',
  role: 'walker',
  documents: defaultDocuments,
  vehicle: { ...defaultVehicle },
});

const isDriver = computed(() => {
  return selectedRole.value === 'driver' || selectedRole.value === 'double_role';
});

const loadRoles = async () => {
  try {
    const { data, error: rolesError } = await supabase
      .from('roles')
      .select('*')
      .order('name');
    
    if (rolesError) throw rolesError;
    roles.value = data || [];
  } catch (err) {
    console.error('Erreur lors du chargement des rôles:', err);
    error.value = 'Erreur lors du chargement des rôles';
  }
};

const loadUserProfile = async () => {
  try {
    loading.value = true;
    
    // Get current user data
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!user) throw new Error('Utilisateur non connecté');

    // Get user profile
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    if (profileError) throw profileError;

    // Get user role
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('roles(name)')
      .eq('user_id', user.id)
      .maybeSingle();

    if (roleError) throw roleError;

    const userRole = roleData as unknown as UserRoleData;

    // Update form with user data
    form.value = {
      name: profileData?.name || user.user_metadata?.name || '',
      email: user.email || '',
      phoneNumber: profileData?.phone || '',
      profilePicture: profileData?.avatar_url || '',
      role: userRole?.roles?.name || 'walker',
      documents: profileData?.documents || defaultDocuments,
      vehicle: profileData?.vehicle || { ...defaultVehicle },
    };

    selectedRole.value = userRole?.roles?.name || 'walker';
  } catch (err) {
    console.error('Error loading user profile:', err);
    error.value = 'Erreur lors du chargement du profil';
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await Promise.all([
    loadRoles(),
    loadUserProfile()
  ]);
});

watch(selectedRole, async (newRole) => {
  if (newRole !== form.value.role) {
    try {
      loading.value = true;
      
      // Get role ID
      const { data: roleData, error: roleError } = await supabase
        .from('roles')
        .select('id')
        .eq('name', newRole)
        .single();

      if (roleError) throw roleError;

      // Update user_roles
      const { error: updateError } = await supabase
        .from('user_roles')
        .upsert({
          user_id: userStore.user?.id,
          role_id: roleData.id
        }, {
          onConflict: 'user_id'
        });

      if (updateError) throw updateError;

      // Update local form
      form.value.role = newRole;
      
      // Update user store
      if (userStore.user) {
        await userStore.updateProfile({
          ...userStore.user,
          role: newRole
        });
      }
    } catch (err) {
      console.error('Erreur lors du changement de rôle:', err);
      error.value = 'Erreur lors du changement de rôle';
      // Reset to previous role
      selectedRole.value = form.value.role;
    } finally {
      loading.value = false;
    }
  }
});

const handleDocumentUpload = async (type: keyof UserDocuments, file: File) => {
  try {
    const storage = getStorage();
    const userId = userStore.user?.id;
    if (!userId) throw new Error('Utilisateur non connecté');

    const documentRef = storageRef(storage, `users/${userId}/documents/${type}_${Date.now()}`);
    await uploadBytes(documentRef, file);
    const url = await getDownloadURL(documentRef);

    if (!form.value.documents) {
      form.value.documents = defaultDocuments;
    }

    (form.value.documents as any)[type] = {
      url,
      uploadDate: new Date().toISOString(),
      verificationStatus: 'pending'
    };
  } catch (error) {
    console.error('Erreur lors du téléchargement du document:', error);
    alert('Erreur lors du téléchargement du document');
  }
};

const handleProfilePictureUpload = async () => {
  try {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/png';
    
    input.onchange = async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const storage = getStorage();
        const userId = userStore.user?.id;
        if (!userId) throw new Error('Utilisateur non connecté');

        const profilePicRef = storageRef(storage, `users/${userId}/profile_${Date.now()}`);
        await uploadBytes(profilePicRef, file);
        form.value.profilePicture = await getDownloadURL(profilePicRef);
      }
    };
    
    input.click();
  } catch (error) {
    console.error('Erreur lors du téléchargement de la photo de profil:', error);
    alert('Erreur lors du téléchargement de la photo de profil');
  }
};

const handleSubmit = async () => {
  try {
    loading.value = true;
    error.value = '';

    // Update profile in Supabase
    const { error: updateError } = await supabase
      .from('profiles')
      .upsert({
        id: userStore.user?.id,
        name: form.value.name,
        phone: form.value.phoneNumber,
        avatar_url: form.value.profilePicture,
        documents: form.value.documents,
        vehicle: isDriver.value ? form.value.vehicle : null,
        updated_at: new Date().toISOString()
      });

    if (updateError) throw updateError;

    // Update user store
    if (userStore.user) {
      await userStore.updateProfile({
        ...userStore.user,
        name: form.value.name,
        phoneNumber: form.value.phoneNumber,
        profilePicture: form.value.profilePicture,
        documents: form.value.documents,
        ...(isDriver.value && { vehicle: form.value.vehicle })
      });
    }

    alert('Profil mis à jour avec succès');
  } catch (err) {
    console.error('Erreur lors de la mise à jour du profil:', err);
    error.value = 'Erreur lors de la mise à jour du profil';
  } finally {
    loading.value = false;
  }
};

const resetForm = async () => {
  await loadUserProfile();
};
</script>