<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Créer un compte
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md shadow-sm space-y-3">
          <div>
            <label for="name" class="sr-only">Nom complet</label>
            <input
              id="name"
              name="name"
              type="text"
              v-model="name"
              required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Nom complet"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Adresse email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Mot de passe</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Mot de passe"
            />
          </div>
          <div>
            <label for="role" class="sr-only">Rôle</label>
            <select
              id="role"
              name="role"
              v-model="role"
              required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            >
              <option value="">Sélectionnez votre rôle</option>
              <option v-for="r in roles" :key="r.id" :value="r.name">
                {{ r.description || r.name }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            :disabled="loading"
          >
            <span v-if="!loading">S'inscrire</span>
            <span v-else>Inscription en cours...</span>
          </button>
        </div>
      </form>

      <div class="text-center">
        <router-link to="/login" class="text-blue-600 hover:text-blue-500">
          Déjà un compte ? Se connecter
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '../services/supabase';
import { useRouter } from 'vue-router';
import type { Role } from '../types/role';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');
const loading = ref(false);
const roles = ref<Role[]>([]);

const fetchRoles = async () => {
  try {
    const { data, error } = await supabase
      .from('roles')
      .select('*')
      .order('name');

    if (error) throw error;
    roles.value = data || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des rôles:', error);
  }
};

onMounted(() => {
  fetchRoles();
});

const handleRegister = async () => {
  try {
    loading.value = true;
    
    // Création d'un utilisateur avec Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value
        }
      }
    });

    if (authError) throw authError;

    console.log('Utilisateur créé :', authData.user);

    // Récupérer l'ID du rôle
    const { data: roleData, error: roleError } = await supabase
      .from('roles')
      .select('id')
      .eq('name', role.value)
      .single();

    if (roleError) throw roleError;
    if (!roleData) throw new Error(`Rôle ${role.value} non trouvé`);

    // Ajouter l'utilisateur à la table user_roles
    const { data: userRoleData, error: userRoleError } = await supabase
      .from('user_roles')
      .insert([
        {
          user_id: authData.user.id,
          role_id: roleData.id
        }
      ])
      .select();

    if (userRoleError) throw userRoleError;

    console.log('Rôle ajouté :', userRoleData);

    // Rediriger vers la page de connexion
    router.push('/login');
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    alert('Erreur : ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>
