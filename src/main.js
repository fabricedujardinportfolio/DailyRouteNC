import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur que vous avez créé
import './assets/styles/style.scss'; // Vos styles personnalisés

// Créez l'application et utilisez le routeur
createApp(App)
  .use(router) // Utiliser le routeur pour gérer les routes de l'application
  .mount('#app');
