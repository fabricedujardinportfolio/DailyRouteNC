<template>
  <div class="signup-container">
    <!-- Formulaire d'inscription -->
    <div class="signup-form">
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

      <!-- Lien vers la page de connexion (ouvre la modal) -->
      <p>Déjà un compte ? 
        <a href="#" @click.prevent="openLoginModal">Connectez-vous ici</a>
      </p>
    </div>

    <!-- Modal de connexion (réutilisable) -->
    <LoginModal :show="showLoginModal" @close="closeLoginModal" @login-success="$router.push('/accueil')"/>
  </div>
</template>

<script>
// Importer le composant LoginModal
import LoginModal from '@/components/LoginModal.vue';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'UserInscription',
  components: {
    LoginModal,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      success: '',
      loading: false, // Etat de chargement pour éviter les actions multiples
      showLoginModal: false, // État pour afficher ou cacher la modal de connexion
    };
  },
  methods: {
    register() {
      this.error = '';
      this.success = '';
      this.loading = true;

      if (this.password !== this.confirmPassword) {
        this.error = "Les mots de passe ne correspondent pas.";
        this.loading = false;
        return;
      }

      if (!this.email.includes('@')) {
        this.error = "Veuillez entrer une adresse email valide.";
        this.loading = false;
        return;
      }

      if (this.password.length < 6) {
        this.error = "Le mot de passe doit contenir au moins 6 caractères.";
        this.loading = false;
        return;
      }

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('Utilisateur inscrit :', userCredential.user);
          this.success = 'Inscription réussie ! Vous allez être redirigé vers la page de connexion...';
          this.loading = false;

          setTimeout(() => {
            this.$router.push('/login');
          }, 2000);
        })
        .catch((error) => {
          this.error = error.message;
          console.error('Erreur d\'inscription :', error);
          this.loading = false;
        });
    },
    
    // Ouvrir la modal de connexion
    openLoginModal() {
      this.showLoginModal = true;
    },

    // Fermer la modal de connexion
    closeLoginModal() {
      this.showLoginModal = false;
    },
  },
};
</script>

<style scoped lang="scss">
/* Conteneur principal */
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Occuper toute la hauteur de l'écran */
  background: linear-gradient(135deg, #007bff, #00d4ff); /* Dégradé agréable */
}

/* Formulaire d'inscription */
.signup-form {
  background-color: white; /* Fond blanc pour le formulaire */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.2); /* Ombre pour donner du relief */
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #007bff; /* Couleur principale */
    
    @media (max-width:768px) {
       font-size :1.8rem ;
     }
   }
   
   form{
     display:flex ; 
     flex-direction :column ; 
     gap :15px ; 
     
     input{
       padding :12px ; 
       border-radius :5px ; 
       border :1px solid #ccc ;
       font-size :1rem ;

       &::placeholder{
         color:#999 ;
       }
     }
     
     button{
       padding :12px ; 
       background-color:#007bff ; 
       color:white ;
       border:none ;
       border-radius :5px ;
       
       &:hover{
         background-color:#0056b3 ;
       }
       
       &:focus{
         outline:none ;
       }
       
       &:active{
         transform :scale(0.98) ;
       }
       
       transition :background-color .3s ,transform .2s ease-in-out ; 
     }
   }

   p {
     text-align:center ;
     margin-top :10px ;
     
     a{
       color:#007bff ;
       
       &:hover{
         text-decoration :underline ;
       }
     }
   }

   .error {
     color:red ;
     text-align:center ;
   }

   .success{
     color:#28a745 ; 
     text-align:center ;
   }
}
</style>