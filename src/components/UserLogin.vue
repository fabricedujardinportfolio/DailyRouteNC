<template>
  <div id="login" class="container-presentation-login">
    <!-- Conteneur de la vidéo -->
    <div class="container-bg-video-presentation">
      <!-- Vidéo de présentation -->
      <video autoplay muted loop class="bg-video">
        <source src="../assets/videos/presentation.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      <!-- Punchline et explication -->
      <div class="presentation-text">
        <h1>Simplifiez vos trajets quotidiens</h1>
        <p>Réservez ou proposez des trajets en quelques clics. Rejoignez une communauté qui se déplace de manière plus écologique et économique.</p>
      </div>

      <!-- Conteneur des boutons -->
      <div class="action-buttons">
        <!-- Bouton pour afficher la modal de connexion -->
        <button @click="openModal">Se connecter</button>
        <div class="separateur">ou</div>
        <!-- Bouton pour rediriger vers la page d'inscription -->
        <button @click="goToSignup">S'inscrire</button>
      </div>
    </div>

    <!-- Modal de connexion (réutilisable) -->
    <LoginModal v-if="showLoginModal" :show="showLoginModal" @close="closeModal" @login-success="handleLoginSuccess"/>
  </div>
</template>

<script>
// Importer le composant LoginModal
import LoginModal from '@/components/LoginModal.vue';

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      showLoginModal: false, // État pour afficher ou cacher la modal
    };
  },
  methods: {
    openModal() {
      console.log('Ouverture de la modal');
      this.showLoginModal = true;
    },
    closeModal() {
      this.showLoginModal = false;
    },
    goToSignup() {
      this.$router.push('/signup');
    },
    handleLoginSuccess() {
      this.$router.push('/accueil'); // Redirection après connexion réussie
    },
  },
};
</script>