import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';
import Home from '../views/Home.vue';

// Import views directly to avoid dynamic import issues
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/Profile.vue';
import CreateRoute from '../views/CreateRoute.vue';
import SearchRoutes from '../views/SearchRoutes.vue';
import TokensShop from '../views/TokensShop.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/create-route',
    name: 'CreateRoute',
    component: CreateRoute,
    meta: { requiresAuth: true, requiresDriver: true },
  },
  {
    path: '/search-routes',
    name: 'SearchRoutes',
    component: SearchRoutes,
    meta: { requiresAuth: true },
  },
  {
    path: '/tokens-shop',
    name: 'TokensShop',
    component: TokensShop,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  const requiresDriver = to.matched.some(record => record.meta.requiresDriver);

  if (requiresAuth && !userStore.isAuthenticated) {
    next('/login');
  } else if (requiresGuest && userStore.isAuthenticated) {
    next('/dashboard');
  } else if (requiresDriver && !userStore.isDriver) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;