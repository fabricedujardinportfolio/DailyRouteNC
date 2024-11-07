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
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
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
  
  <style scoped>
  /* Style basique pour le composant d'inscription */
  .signup-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px;
    width: 100%;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #cccccc;
  }
  
  .error {
    color: red;
    font-weight: bold;
    margin-top: 15px;
  }
  
  .success {
    color: green;
    font-weight: bold;
    margin-top: 15px;
  }
  </style>
  