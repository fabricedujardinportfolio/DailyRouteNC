<template>
  <nav class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="font-bold text-xl text-blue-600">
          DailyRouteNC
        </router-link>
        
        <div class="hidden md:flex space-x-4">
          <router-link
            to="/search-routes"
            class="text-gray-600 hover:text-blue-600 px-3 py-2"
          >
            Rechercher
          </router-link>
          <router-link
            to="/tokens-shop"
            class="text-gray-600 hover:text-blue-600 px-3 py-2"
          >
            Acheter des jetons
          </router-link>
          
          <!-- Boutons d'authentification -->
          <template v-if="!isAuthenticated">
            <router-link
              to="/login"
              class="text-gray-600 hover:text-blue-600 px-3 py-2"
            >
              Connexion
            </router-link>
            <router-link
              to="/register"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              S'inscrire
            </router-link>
          </template>
          
          <!-- Menu utilisateur connecté -->
          <div v-else class="relative" v-click-outside="closeUserMenu">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-3 py-2"
            >
              <span>{{ userName }}</span>
              <span class="text-xs">▼</span>
            </button>
            
            <!-- Menu déroulant -->
            <div
              v-if="showUserMenu"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
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
const showUserMenu = ref(false);

const isAuthenticated = computed(() => userStore.isAuthenticated);
const userName = computed(() => userStore.user?.name || 'Mon compte');

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const closeUserMenu = () => {
  showUserMenu.value = false;
};

const handleLogout = async () => {
  try {
    await userStore.logout();
    closeUserMenu();
    router.push('/');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};

// Étendre l'interface HTMLElement pour inclure clickOutsideEvent
declare global {
  interface HTMLElement {
    clickOutsideEvent?: (event: Event) => void;
  }
}

// Directive personnalisée pour fermer le menu quand on clique en dehors
const clickOutside = {
  mounted(el: HTMLElement, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el: HTMLElement) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent);
    }
  },
};

// Enregistrez la directive localement dans ce composant
</script>