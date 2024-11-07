import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue'; // Même orthographe que le fichier
import Accueil from '../components/Accueil.vue'; // Utiliser la majuscule si le fichier est nommé "Accueil.vue"
import InscriptionComponent from '../components/Inscription.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: UserLogin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: InscriptionComponent,
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard de navigation pour protéger certaines routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user'); // Supposons qu'on utilise localStorage pour le token de session

  if (to.name === 'Accueil' && !isAuthenticated) {
    next({ name: 'Login' }); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  } else {
    next(); // Continuer la navigation
  }
});

export default router;
