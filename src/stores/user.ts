import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { login, register, signOut, updateUserProfile } from '../services/auth';

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
    async loginUser(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        const user = await login(email, password);
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
        const user = await register(email, password, name, role);
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
        await updateUserProfile(this.user.id, data);
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
        await signOut();
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