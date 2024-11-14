import { getAuth } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import Accueil from '../components/Accueil.vue';
import InscriptionComponent from '../components/Inscription.vue';

const routes = [
  { path: '/', name: 'Login', component: UserLogin },
  { path: '/signup', name: 'Signup', component: InscriptionComponent },
  { path: '/accueil', name: 'Accueil', component: Accueil },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirection par défaut
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard pour protéger certaines routes
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const isAuthenticated = !!auth.currentUser; // Vérifier si un utilisateur est actuellement connecté

  if (to.name === 'Accueil' && !isAuthenticated) {
    next({ name: 'Login' }); // Rediriger vers la page de connexion si non authentifié
  } else {
    next(); // Continuer la navigation
  }
});

export default router;