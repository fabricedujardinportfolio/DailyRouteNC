<template>
  <div>
    <!-- N'afficher le HeaderComponent que si l'utilisateur est authentifié -->
    <HeaderComponent v-if="isAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      isAuthenticated: false, // Par défaut, l'utilisateur n'est pas connecté
    };
  },
  created() {
    // Vérifier l'état d'authentification dès que le composant est monté
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        this.isAuthenticated = true;
      } else {
        // L'utilisateur n'est pas connecté
        this.isAuthenticated = false;
      }
    });
  },
};
</script>

<style scoped>
/* Styles optionnels */
</style>
