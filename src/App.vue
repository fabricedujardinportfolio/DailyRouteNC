<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/navigation/NavBar.vue';
</script>