<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Voyagez ensemble en Nouvelle-Calédonie
        </h1>
        <p class="text-xl mb-8">
          Partagez vos trajets quotidiens et économisez ensemble
        </p>
        <div class="flex gap-4">
          <router-link
            to="/register"
            class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Commencer
          </router-link>
          <router-link
            to="/search-routes"
            class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Rechercher un trajet
          </router-link>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="text-2xl text-blue-600">🚗</i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Conducteurs</h3>
            <p>Définissez vos trajets quotidiens et gagnez des revenus supplémentaires</p>
          </div>
          <div class="text-center p-6">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="text-2xl text-blue-600">👥</i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Passagers</h3>
            <p>Trouvez des trajets qui correspondent à vos besoins et économisez</p>
          </div>
          <div class="text-center p-6">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="text-2xl text-blue-600">🎫</i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Jetons</h3>
            <p>Achetez des jetons pour réserver vos trajets en toute simplicité</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// La logique du composant sera ajoutée ici
</script>