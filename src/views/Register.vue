<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Créer un compte
        </h2>
      </div>

      <!-- Error Alert -->
      <div v-if="error" class="bg-red-50 border-l-4 border-red-400 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-red-700">{{ error }}</p>
          </div>
        </div>
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
              :disabled="loading"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Nom complet"
              :class="{ 'border-red-300': error }"
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
              :disabled="loading"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Adresse email"
              :class="{ 'border-red-300': error }"
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
              :disabled="loading"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Mot de passe"
              :class="{ 'border-red-300': error }"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ loading ? 'Inscription en cours...' : 'S\'inscrire' }}
          </button>
        </div>
      </form>

      <div class="text-center">
        <router-link 
          to="/login" 
          class="text-blue-600 hover:text-blue-500"
          :class="{ 'pointer-events-none opacity-50': loading }"
        >
          Déjà un compte ? Se connecter
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../services/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleRegister = async () => {
  try {
    error.value = '';
    loading.value = true;

    // Validation
    if (!name.value || !email.value || !password.value) {
      error.value = 'Veuillez remplir tous les champs';
      loading.value = false;
      return;
    }

    if (!validateEmail(email.value)) {
      error.value = 'Veuillez entrer une adresse email valide';
      loading.value = false;
      return;
    }

    if (password.value.length < 6) {
      error.value = 'Le mot de passe doit contenir au moins 6 caractères';
      loading.value = false;
      return;
    }

    // Create user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value,
          role: 'walker' // Par défaut, tous les utilisateurs sont des marcheurs
        }
      }
    });

    if (authError) {
      if (authError.message === 'User already registered') {
        error.value = 'Un compte existe déjà avec cette adresse email. Veuillez vous connecter.';
        return;
      }
      throw authError;
    }

    if (!authData.user) {
      throw new Error('Erreur lors de la création du compte');
    }

    // Get role ID for walker
    const { data: roleData, error: roleError } = await supabase
      .from('roles')
      .select('id')
      .eq('name', 'walker')
      .single();

    if (roleError) throw roleError;

    // Insert user role
    const { error: userRoleError } = await supabase
      .from('user_roles')
      .insert([
        {
          user_id: authData.user.id,
          role_id: roleData.id
        }
      ]);

    if (userRoleError) throw userRoleError;

    // Redirect to login page with success message
    router.push({ 
      path: '/login',
      query: { registered: 'true' }
    });
  } catch (err) {
    console.error('Erreur lors de l\'inscription:', err);
    error.value = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.';
  } finally {
    loading.value = false;
  }
};
</script>