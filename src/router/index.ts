import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/create-route',
    name: 'CreateRoute',
    component: () => import('../views/CreateRoute.vue'),
    meta: { requiresAuth: true, requiresDriver: true },
  },
  {
    path: '/search-routes',
    name: 'SearchRoutes',
    component: () => import('../views/SearchRoutes.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/tokens-shop',
    name: 'TokensShop',
    component: () => import('../views/TokensShop.vue'),
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