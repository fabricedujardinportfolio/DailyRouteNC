<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <!-- Lien vers la page d'inscription -->
    <p>Pas encore de compte ? <router-link to="/signup">Inscrivez-vous ici</router-link></p>
  </div>
</template>

<script>
// Importer l'authentification depuis votre fichier de configuration
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Connexion réussie
          console.log('Utilisateur connecté :', userCredential.user);
          // Rediriger l'utilisateur, par exemple :
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          // Gestion des erreurs de connexion
          this.error = error.message;
          console.error('Erreur de connexion :', error);
        });
    },
  },
};
</script>

<style scoped>
/* Style basique pour le composant de connexion */
.login-container {
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

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 15px;
}

p a {
  color: #007bff;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline;
}
</style>
