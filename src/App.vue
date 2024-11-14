<template>
  <div>
    <!-- Afficher un indicateur de chargement pendant la vérification -->
    <div v-if="isLoading">Chargement...</div>

    <!-- N'afficher le contenu que si la vérification est terminée -->
    <div v-else>
      <!-- N'afficher le HeaderComponent que si l'utilisateur est authentifié -->
      <HeaderComponent v-if="isAuthenticated" />
      <router-view />
    </div>
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
      isAuthenticated: false,
      isLoading: true, // Indicateur de chargement
    };
  },
  created() {
    const auth = getAuth();
    
    // Vérifier l'état d'authentification dès que le composant est monté
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        this.isAuthenticated = true;
        this.$router.push('/accueil'); // Rediriger vers la page d'accueil si connecté
      } else {
        // L'utilisateur n'est pas connecté
        this.isAuthenticated = false;
        this.$router.push('/login'); // Rediriger vers la page login si non connecté
      }
      // La vérification est terminée
      this.isLoading = false;
    });
  },
};
</script>

<style scoped>
/* Styles optionnels */
</style>