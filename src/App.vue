<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="font-bold text-xl text-blue-600">
            DailyRouteNC
          </router-link>
          
          <div class="hidden md:flex space-x-4">
            <router-link
              to="/search-routes"
              class="text-gray-600 hover:text-blue-600 px-3 py-2"
            >
              Rechercher
            </router-link>
            <router-link
              to="/tokens-shop"
              class="text-gray-600 hover:text-blue-600 px-3 py-2"
            >
              Acheter des jetons
            </router-link>
            <router-link
              to="/login"
              class="text-gray-600 hover:text-blue-600 px-3 py-2"
            >
              Connexion
            </router-link>
            <router-link
              to="/register"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              S'inscrire
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup lang="ts">
// La logique du composant sera ajoutée ici
</script>