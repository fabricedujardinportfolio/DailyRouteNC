import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
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

export default router;