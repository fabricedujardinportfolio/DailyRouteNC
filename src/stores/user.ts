import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { supabase, reconnectSupabase } from '../services/supabase';

interface UserRoleData {
  roles: {
    name: 'driver' | 'walker' | 'double_role';
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
    initialized: false,
    tokenBalance: 0,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    isDriver: (state) => {
      const role = state.user?.role;
      return role === 'driver' || role === 'double_role';
    },
  },

  actions: {
    async reconnect() {
      if (this.initialized) return;
      
      this.loading = true;
      try {
        await reconnectSupabase();
        
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        if (session?.user) {
          // Get user role
          const { data: roleData, error: roleError } = await supabase
            .from('user_roles')
            .select('roles(name)')
            .eq('user_id', session.user.id)
            .maybeSingle();

          if (roleError) {
            console.error('Erreur lors de la récupération du rôle:', roleError);
          }

          // Get user profile including token balance
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('token_balance')
            .eq('id', session.user.id)
            .single();

          if (profileError) {
            console.error('Erreur lors de la récupération du profil:', profileError);
          }

          const userRole = roleData as unknown as UserRoleData;
          
          this.setUser({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.name || '',
            role: userRole?.roles?.name || 'walker',
            isVerified: session.user.email_confirmed_at !== null,
            documents: {
              status: 'pending'
            },
          });

          this.tokenBalance = profile?.token_balance || 0;
          this.subscribeToProfile(session.user.id);
        }
      } catch (error) {
        console.error('Erreur lors de la reconnexion:', error);
        this.error = 'Erreur lors de la reconnexion';
      } finally {
        this.loading = false;
        this.initialized = true;
      }
    },

    async updateTokenBalance() {
      if (!this.user?.id) return;

      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('token_balance')
          .eq('id', this.user.id)
          .single();

        if (error) throw error;
        this.tokenBalance = profile.token_balance;
      } catch (error) {
        console.error('Erreur lors de la mise à jour du solde de jetons:', error);
      }
    },

    subscribeToProfile(userId: string) {
      const channel = supabase
        .channel(`profile_changes_${userId}`)
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'profiles',
            filter: `id=eq.${userId}`
          },
          () => {
            this.updateTokenBalance();
          }
        )
        .subscribe();

      return () => {
        channel.unsubscribe();
      };
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

        if (!data.user) {
          throw new Error('Utilisateur non trouvé');
        }

        // Get user role
        const { data: roleData, error: roleError } = await supabase
          .from('user_roles')
          .select('roles(name)')
          .eq('user_id', data.user.id)
          .maybeSingle();

        if (roleError) {
          console.error('Erreur lors de la récupération du rôle:', roleError);
          throw roleError;
        }

        // Get user profile including token balance
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('token_balance')
          .eq('id', data.user.id)
          .single();

        if (profileError) {
          console.error('Erreur lors de la récupération du profil:', profileError);
        }

        const userRole = roleData as unknown as UserRoleData;
        
        this.setUser({
          id: data.user.id,
          email: data.user.email || '',
          name: data.user.user_metadata?.name || '',
          role: userRole?.roles?.name || 'walker',
          isVerified: data.user.email_confirmed_at !== null,
          documents: {
            status: 'pending'
          },
        });

        this.tokenBalance = profile?.token_balance || 0;
        this.subscribeToProfile(data.user.id);

        return true;
      } catch (error: any) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async registerUser(email: string, password: string, name: string, role: User['role']) {
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
        
        if (!data.user) {
          throw new Error('Erreur lors de la création du compte');
        }

        // Get role ID for walker
        const { data: roleData, error: roleError } = await supabase
          .from('roles')
          .select('id')
          .eq('name', 'walker')
          .single();

        if (roleError) throw roleError;

        // Insert user role
        const { error: userRoleError } = await supabase
          .from('user_roles')
          .insert([
            {
              user_id: data.user.id,
              role_id: roleData.id
            }
          ]);

        if (userRoleError) throw userRoleError;

        this.setUser({
          id: data.user.id,
          email: data.user.email || '',
          name: data.user.user_metadata?.name || '',
          role: data.user.user_metadata?.role || 'walker',
          isVerified: data.user.email_confirmed_at !== null,
          documents: {
            status: 'pending'
          },
        });

        this.tokenBalance = 0;
        this.subscribeToProfile(data.user.id);

        return true;
      } catch (error: any) {
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
        if (!this.user?.id) {
          throw new Error('Utilisateur non connecté');
        }

        // Update user metadata
        const { error: updateError } = await supabase.auth.updateUser({
          data: {
            name: data.name,
            role: data.role
          }
        });

        if (updateError) throw updateError;

        // If role is being updated, update user_roles table
        if (data.role && data.role !== this.user.role) {
          // Get role ID
          const { data: roleData, error: roleError } = await supabase
            .from('roles')
            .select('id')
            .eq('name', data.role)
            .single();

          if (roleError) throw roleError;

          // Update user_roles
          const { error: userRoleError } = await supabase
            .from('user_roles')
            .upsert({
              user_id: this.user.id,
              role_id: roleData.id
            }, {
              onConflict: 'user_id'
            });

          if (userRoleError) throw userRoleError;
        }

        // Update local user state
        this.setUser({
          ...this.user,
          ...data,
        });

        return true;
      } catch (error: any) {
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
        this.tokenBalance = 0;
        return true;
      } catch (error: any) {
        this.error = error.message;
        throw error;
      }
    },

    setUser(user: User | null) {
      this.user = user;
    }
  },
});