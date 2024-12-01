<template>
  <div :class="{ 'app-loading': is_loading }">
    <!-- Loader global -->
    <div v-if="is_loading" class="loader-container">
      <p>Chargement...</p>
    </div>

    <!-- Affiche le contenu si tout est prêt -->
    <div v-else>
      <HeaderComponent v-if="is_authenticated" />
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
      is_authenticated: false,
      is_loading: true, // Indicateur global de chargement
    };
  },
  created() {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.is_authenticated = true;
        if (this.$route.path !== '/accueil') {
          this.$router.push('/accueil');
        }
      } else {
        this.is_authenticated = false;
        if (this.$route.path !== '/login') {
          this.$router.push('/login');
        }
      }
      // Terminer le chargement global
      this.is_loading = false;
    });
  },
};
</script>
