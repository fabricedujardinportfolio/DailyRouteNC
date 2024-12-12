<template>
  <nav class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="font-bold text-xl text-blue-600">
          DailyRouteNC
        </router-link>

        <!-- Bouton burger (visible uniquement sur mobile) -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <!-- Liens de navigation (affichés sur desktop ou via le menu burger) -->
        <div
          :class="{
            'hidden': !menuOpen,
            'block': menuOpen,
          }"
          class="absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <!-- Liens principaux -->
          <router-link
            to="/search-routes"
            class="block text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"
          >
            Rechercher
          </router-link>
          <router-link
            to="/tokens-shop"
            class="block text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"
          >
            Acheter des jetons
          </router-link>

          <!-- Boutons d'authentification -->
          <template v-if="!isAuthenticated">
            <router-link
              to="/login"
              class="block text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"
            >
              Connexion
            </router-link>
            <router-link
              to="/register"
              class="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 md:px-3 md:py-2"
            >
              S'inscrire
            </router-link>
          </template>

          <!-- Menu utilisateur connecté -->
          <div v-if="isAuthenticated" class="relative">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"
            >
              <span>{{ userName }}</span>
              <span class="text-xs">▼</span>
            </button>

            <!-- Menu déroulant utilisateur -->
            <div
              v-if="showUserMenu"
              class="absolute right-0 mt-2 w-full md:w-auto bg-white rounded-md shadow-lg py-1 z-[100]"
            >
              <router-link
                to="/profile"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Mon profil
              </router-link>
              <button
                @click="handleLogout"
                class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';

const router = useRouter();
const userStore = useUserStore();

const menuOpen = ref(false); // État pour afficher/masquer le menu burger
const showUserMenu = ref(false); // État pour afficher/masquer le menu utilisateur

const isAuthenticated = computed(() => userStore.isAuthenticated);
const userName = computed(() => userStore.user?.name || 'Mon compte');

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const handleLogout = async () => {
  try {
    await userStore.logout();
    showUserMenu.value = false;
    router.push('/');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
