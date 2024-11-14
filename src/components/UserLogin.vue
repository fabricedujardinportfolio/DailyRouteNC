<template>
  <div class="container-presentation-login">
    <!-- Conteneur de la vidéo -->
    <div class="container-bg-video-presentation">
      <!-- Vidéo de présentation -->
      <video autoplay muted loop class="bg-video">
        <source src="../assets/videos/presentation.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      <!-- Conteneur des boutons -->
      <div class="action-buttons">
        <!-- Bouton pour afficher la modal de connexion -->
        <button @click="showLoginModal = true">Se connecter</button>
        <span>ou</span>
        <!-- Bouton pour rediriger vers la page d'inscription -->
        <button @click="goToSignup">S'inscrire</button>
      </div>
    </div>

    <!-- Modal de connexion -->
    <div v-if="showLoginModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <!-- Formulaire de connexion dans la modal -->
        <form @submit.prevent="login">
          <h2>Connexion</h2>
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="password" type="password" placeholder="Mot de passe" />
          <button type="submit">Se connecter</button>
          <!-- Message d'erreur -->
          <p v-if="error">{{ error }}</p>
        </form>
        <!-- Bouton pour fermer la modal -->
        <button class="close-modal" @click="closeModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isAuthenticated: false, // Suivre l'état d'authentification
      showLoginModal: false, // État pour afficher ou cacher la modal
    };
  },
  methods: {
    // Ouvrir la modal
    openModal() {
      this.showLoginModal = true;
    },
    // Fermer la modal
    closeModal() {
      this.showLoginModal = false;
    },
    // Rediriger vers la page d'inscription
    goToSignup() {
      this.$router.push('/signup');
    },
    // Fonction de connexion
    login() {
      const auth = getAuth();
      
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('Utilisateur connecté :', userCredential.user);
          this.isAuthenticated = true;
          this.closeModal(); // Fermer la modal après connexion réussie
          this.$router.push('/accueil'); // Redirection vers l'accueil
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              this.error = "L'email est invalide.";
              break;
            default:
              this.error = "Identifiants incorrects. Veuillez vérifier vos informations.";
          }
        });
    },
  },
};
</script>