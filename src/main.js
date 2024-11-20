import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur
import './assets/styles/style.scss'; // Vos styles personnalisés

// Importer VueGoogleMaps
import VueGoogleMaps from '@fawmi/vue-google-maps';

// Créez l'application et utilisez le routeur
const app = createApp(App);

app.use(router); // Utiliser le routeur pour gérer les routes de l'application

// Configurer Google Maps avec la clé API
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAi1kO8MJ3ws_ANBij0_UxlmLhuXMqGs_k', // Remplace par ta clé API
    libraries: 'places', // Nécessaire pour l'autocomplétion des lieux
  },
});

app.mount('#app');