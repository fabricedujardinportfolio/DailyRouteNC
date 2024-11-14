<template>
  <header class="main-header">
    <div class="container">
      <h1>Mon Application Vue.js</h1>
      <nav>
        <ul>
          <!-- Si l'utilisateur n'est pas authentifié, afficher Connexion et Inscription -->
          <li v-if="!isAuthenticated"><router-link to="/signup">Inscription</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/">Connexion</router-link></li>

          <!-- Si l'utilisateur est authentifié, afficher Déconnexion -->
          <li v-if="isAuthenticated"><a href="#" @click.prevent="logout">Déconnexion</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isAuthenticated: false, // État d'authentification
    };
  },
  created() {
    const auth = getAuth();

    // Suivre l'état d'authentification
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuthenticated = true; // L'utilisateur est connecté
      } else {
        this.isAuthenticated = false; // L'utilisateur n'est pas connecté
      }
    });
  },
  methods: {
    logout() {
      const auth = getAuth();
      
      // Déconnexion de Firebase
      signOut(auth)
        .then(() => {
          console.log('Utilisateur déconnecté');
          this.$router.push('/'); // Rediriger vers la page de connexion après déconnexion
        })
        .catch((error) => {
          console.error('Erreur lors de la déconnexion :', error);
        });
    },
  },
};
</script>

<style scoped>
.main-header {
  background-color: #007bff;
  color: white;
  padding: 10px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav ul {
  list-style-type: none;
}
nav ul li {
  display: inline;
  margin-right: 15px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
nav ul li a:hover {
  text-decoration: underline;
}
</style>