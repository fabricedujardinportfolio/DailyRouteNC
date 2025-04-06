<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/navigation/NavBar.vue';
import { useUserStore } from './stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
  try {
    await userStore.reconnect();
    
    // Rediriger vers le tableau de bord si l'utilisateur est connecté et sur la page d'accueil
    if (userStore.isAuthenticated && router.currentRoute.value.path === '/') {
      router.push('/dashboard');
    }
  } catch (error) {
    console.error('Erreur lors de la reconnexion:', error);
  }
});
</script>