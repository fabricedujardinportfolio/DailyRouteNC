<template>
  <div class="login-container">
    <!-- N'afficher le formulaire que si l'utilisateur n'est pas authentifié -->
    <form v-if="!isAuthenticated" @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>

    <!-- Message d'erreur -->
    <p v-if="error">{{ error }}</p>

    <!-- Lien vers la page d'inscription -->
    <p>Pas encore de compte ? 
      <router-link to="/signup">Inscrivez-vous ici</router-link>
    </p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isAuthenticated: false, // Suivre l'état d'authentification
    };
  },
  created() {
    const auth = getAuth();
    
    // Vérifier si l'utilisateur est déjà connecté
    onAuthStateChanged( auth, ( user ) => {
      if ( user ) {
        // L'utilisateur est connecté, rediriger vers la page d'accueil
        this.isAuthenticated = true;
        this.$router.push('/accueil');
      } else {
        this.isAuthenticated = false;
      }
    });
  },
  methods: {
    login() {
      const auth = getAuth();
      
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then( ( userCredential ) => {
          console.log('Utilisateur connecté :', userCredential.user);
          this.isAuthenticated = true;
          // Redirection vers la page d'accueil après connexion réussie
          this.$router.push('/accueil');
        })
        .catch( ( error ) => {
          switch ( error.code ) {
            case 'auth/invalid-email':
              this.error = "L'email est invalide.";
              break;
            default:
              // Message générique pour toutes les autres erreurs
              this.error = "Identifiants incorrects. Veuillez vérifier vos informations.";
          }
        });
    },
  },
};
</script>