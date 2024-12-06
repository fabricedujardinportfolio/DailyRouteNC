import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { login, register, signOut, updateUserProfile } from '../services/auth';
import { auth } from '../firebaseConfig'; // Importez Firebase Auth
import { onAuthStateChanged } from 'firebase/auth'; // Importez onAuthStateChanged

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    isDriver: (state) => state.user?.role === 'driver',
  },

  actions: {
    // Méthode pour écouter l'état d'authentification
    initAuthListener() {
      onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          // Si un utilisateur est connecté, récupérez ses données supplémentaires (exemple : rôle)
          const userData = {
            id: firebaseUser.uid,
            email: firebaseUser.email || '',
            name: firebaseUser.displayName || '',
            role: 'driver', // Remplacez par une requête Firestore si nécessaire
          };
          this.setUser(userData);
        } else {
          this.setUser(null);
        }
      });
    },

    async loginUser(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        const user = await login(email, password); // Appelle votre service de connexion
        this.user = user;
      } catch (error: any) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async registerUser(email: string, password: string, name: string, role: 'driver' | 'walker') {
      this.loading = true;
      this.error = null;
      try {
        const user = await register(email, password, name, role); // Appelle votre service d'inscription
        this.user = user;
      } catch (error: any) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateProfile(data: Partial<User>) {
      if (!this.user) return;

      this.loading = true;
      this.error = null;
      try {
        await updateUserProfile(this.user.id, data); // Appelle votre service de mise à jour
        this.user = { ...this.user, ...data };
      } catch (error: any) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        await signOut(); // Appelle votre service de déconnexion
        this.user = null;
      } catch (error: any) {
        this.error = error.message;
        throw error;
      }
    },

    setUser(user: User | null) {
      this.user = user;
    },
  },
});