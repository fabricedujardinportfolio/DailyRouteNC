import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import { useUserStore } from './stores/user'

const app = createApp(App)
app.use(createPinia())
app.use(router)
// Initialiser l'écouteur d'authentification Firebase
const userStore = useUserStore();
userStore.initAuthListener();
app.mount('#app')