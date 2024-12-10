<template>
  <!-- Previous template code remains the same -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';

const router = useRouter();
const userStore = useUserStore();
const showUserMenu = ref(false);

const isAuthenticated = computed(() => userStore.isAuthenticated);
const userName = computed(() => userStore.user?.name || 'Mon compte');

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const closeUserMenu = () => {
  showUserMenu.value = false;
};

const handleLogout = async () => {
  try {
    await userStore.logout();
    closeUserMenu();
    router.push('/');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};

// Define custom type for click outside event
declare module '@vue/runtime-dom' {
  interface HTMLElement {
    clickOutsideEvent?: (event: Event) => void;
  }
}

const vClickOutside = {
  mounted(el: HTMLElement, binding: { value: () => void }) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el: HTMLElement) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent);
    }
  },
};
</script>