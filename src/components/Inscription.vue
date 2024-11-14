<template>
  <div class="signup-container">
    <h2>Inscription</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <input v-model="confirmPassword" type="password" placeholder="Confirmer le mot de passe" />
      <button type="submit" :disabled="loading">
        <span v-if="loading">Chargement...</span>
        <span v-else>S'inscrire</span>
      </button>
    </form>

    <!-- Message d'erreur -->
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Message de succès -->
    <p v-if="success" class="success">{{ success }}</p>

    <!-- Lien vers la page de connexion -->
    <p>Déjà un compte ? 
      <router-link to="/login">Connectez-vous ici</router-link>
    </p>
  </div>
</template>

<script>
// Importer l'authentification depuis votre fichier de configuration
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'InscriptionComponent',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      success: '',
      loading: false, // Etat de chargement pour éviter les actions multiples
    };
  },
  methods: {
    register() {
      // Réinitialiser les messages d'erreur et de succès
      this.error = '';
      this.success = '';
      this.loading = true;

      // Vérifier que les mots de passe correspondent
      if (this.password !== this.confirmPassword) {
        this.error = "Les mots de passe ne correspondent pas.";
        this.loading = false;
        return;
      }

      // Vérifier le format de l'email
      if (!this.email.includes('@')) {
        this.error = "Veuillez entrer une adresse email valide.";
        this.loading = false;
        return;
      }

      // Vérifier la longueur du mot de passe
      if (this.password.length < 6) {
        this.error = "Le mot de passe doit contenir au moins 6 caractères.";
        this.loading = false;
        return;
      }

      // Créer un nouvel utilisateur avec Firebase
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Inscription réussie
          console.log('Utilisateur inscrit :', userCredential.user);
          this.success = 'Inscription réussie ! Vous allez être redirigé vers la page de connexion...';
          this.loading = false;

          // Rediriger après un délai de 2 secondes
          setTimeout(() => {
            this.$router.push('/login');
          }, 2000);
        })
        .catch((error) => {
          // Gestion des erreurs d'inscription
          this.error = error.message;
          console.error('Erreur d\'inscription :', error);
          this.loading = false;
        });
    },
  },
};
</script>