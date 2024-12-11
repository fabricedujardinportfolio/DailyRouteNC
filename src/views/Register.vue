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
              <option value="driver">Conducteur</option>
              <option value="walker">Marcheur</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            S'inscrire
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
import { ref } from 'vue';
import { auth } from '../firebaseConfig'; // Importez l'authentification depuis votre configuration Firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');

const handleRegister = async () => {
  try {
    // Création d'un utilisateur avec email et mot de passe
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Mise à jour du profil utilisateur avec le nom
    await updateProfile(user, {
      displayName: name.value,
    });

    console.log('Utilisateur inscrit avec succès :', user);

    alert('Inscription réussie !');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erreur lors de l\'inscription :', error.message);
      alert('Une erreur est survenue : ' + error.message);
    } else {
      console.error('Erreur inconnue lors de l\'inscription :', error);
      alert('Une erreur inconnue s\'est produite.');
    }
  }
};
</script>
