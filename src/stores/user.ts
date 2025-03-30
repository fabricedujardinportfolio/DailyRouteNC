import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { supabase } from '../services/supabase';

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
    initAuthListener() {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          this.setUser({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.name || '',
            role: session.user.user_metadata?.role || 'walker',
            isVerified: session.user.email_confirmed_at !== null,
            documents: {
              identityCard: undefined,
              driverLicense: undefined,
              vehicleRegistration: undefined,
              insurance: undefined,
              status: 'pending',
              rejectionReason: undefined,
            },
          });
        } else {
          this.setUser(null);
        }
      });
    },

    async loginUser(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;
        
        this.setUser({
          id: data.user?.id,
          email: data.user?.email || '',
          name: data.user?.user_metadata?.name || '',
          role: data.user?.user_metadata?.role || 'walker',
          isVerified: data.user?.email_confirmed_at !== null,
          documents: {
            identityCard: undefined,
            driverLicense: undefined,
            vehicleRegistration: undefined,
            insurance: undefined,
            status: 'pending',
            rejectionReason: undefined,
          },
        });
      } catch (error) {
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
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role
            }
          }
        });

        if (error) throw error;
        
        this.setUser({
          id: data.user?.id,
          email: data.user?.email || '',
          name: data.user?.user_metadata?.name || '',
          role: data.user?.user_metadata?.role || 'walker',
          isVerified: data.user?.email_confirmed_at !== null,
          documents: {
            identityCard: undefined,
            driverLicense: undefined,
            vehicleRegistration: undefined,
            insurance: undefined,
            status: 'pending',
            rejectionReason: undefined,
          },
        });
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateProfile(data: Partial<User>) {
      this.loading = true;
      this.error = null;
      try {
        const { data: updatedUser, error } = await supabase.auth.updateUser({
          data: {
            ...data,
            role: data.role || this.user?.role
          }
        });

        if (error) throw error;

        this.setUser({
          ...this.user,
          ...data,
          name: updatedUser.user?.user_metadata?.name || this.user?.name,
          role: updatedUser.user?.user_metadata?.role || this.user?.role
        });
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        this.setUser(null);
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    setUser(user: User | null) {
      this.user = user;
    }
  },
});