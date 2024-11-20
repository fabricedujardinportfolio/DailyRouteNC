<template>
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
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
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      closeModal() {
        this.$emit('close'); // Émettre un événement pour fermer la modal
      },
      login() {
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then( () => {
            this.$emit('login-success'); // Émettre un événement pour indiquer que la connexion a réussi
            this.closeModal(); // Fermer la modal après connexion réussie
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
