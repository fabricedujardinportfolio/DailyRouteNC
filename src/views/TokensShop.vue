<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <!-- Section Packs de jetons -->
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8">
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Acheter des Jetons</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Pack de 10 jetons -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="text-4xl font-bold text-blue-600 mb-2">10</div>
              <div class="text-lg font-medium mb-4">Jetons</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">1 200 XPF</div>
              <p class="text-gray-600 mb-6">Idéal pour commencer</p>
              <button
                @click="handlePurchase(10)"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Acheter
              </button>
            </div>

            <!-- Pack de 100 jetons -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-blue-50 border-blue-200">
              <div class="text-4xl font-bold text-blue-600 mb-2">100</div>
              <div class="text-lg font-medium mb-4">Jetons</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">12 000 XPF</div>
              <p class="text-gray-600 mb-6">Notre meilleure vente</p>
              <button
                @click="handlePurchase(100)"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Acheter
              </button>
            </div>

            <!-- Pack de 1000 jetons -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="text-4xl font-bold text-blue-600 mb-2">1000</div>
              <div class="text-lg font-medium mb-4">Jetons</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">120 000 XPF</div>
              <p class="text-gray-600 mb-6">Pour les utilisateurs réguliers</p>
              <button
                @click="handlePurchase(1000)"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Abonnements -->
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Abonnements</h2>
          <p class="text-gray-600 mb-8">Profitez d'un prix réduit avec nos formules d'abonnement</p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Abonnement mensuel -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="text-xl font-semibold text-blue-600 mb-2">Mensuel</div>
              <div class="text-4xl font-bold text-gray-900 mb-4">3 000 XPF</div>
              <div class="text-lg text-gray-700 mb-2">par mois</div>
              <div class="text-base text-gray-600 mb-4">(100 XPF × 30 jetons)</div>
              <div class="text-lg font-bold text-gray-900 mb-4">
                Montant total : 3 000 XPF
                <div class="text-sm font-normal text-gray-600">Payable en une fois</div>
              </div>
              <div class="text-sm text-green-600 mb-4">
                Prix à l'unité : 100 XPF/jeton
              </div>
              <ul class="text-gray-600 space-y-3 mb-6">
                <li>30 jetons par mois</li>
                <li>Engagement 1 mois</li>
                <li>Annulation à tout moment</li>
              </ul>
              <button
                @click="handleSubscription('monthly')"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Souscrire
              </button>
            </div>

            <!-- Abonnement 6 mois -->
            <div class="border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-blue-50">
              <div class="text-xl font-semibold text-blue-600 mb-2">6 Mois</div>
              <div class="text-4xl font-bold text-gray-900 mb-4">2 850 XPF</div>
              <div class="text-lg text-gray-700 mb-2">par mois</div>
              <div class="text-base text-gray-600 mb-4">(95 XPF × 30 jetons)</div>
              <div class="text-lg font-bold text-gray-900 mb-4">
                Montant total : 17 100 XPF
                <div class="text-sm font-normal text-gray-600">Payable en une fois</div>
              </div>
              <div class="text-sm text-green-600 mb-4">
                <div>Prix à l'unité : 95 XPF/jeton</div>
                <div class="font-semibold">Économie totale : 900 XPF</div>
                <div class="font-semibold">(-5% sur le prix standard)</div>
              </div>
              <ul class="text-gray-600 space-y-3 mb-6">
                <li>30 jetons par mois</li>
                <li>Engagement 6 mois</li>
                <li>Support prioritaire</li>
              </ul>
              <button
                @click="handleSubscription('sixMonths')"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Souscrire
              </button>
            </div>

            <!-- Abonnement annuel -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="text-xl font-semibold text-blue-600 mb-2">Annuel</div>
              <div class="text-4xl font-bold text-gray-900 mb-4">2 700 XPF</div>
              <div class="text-lg text-gray-700 mb-2">par mois</div>
              <div class="text-base text-gray-600 mb-4">(90 XPF × 30 jetons)</div>
              <div class="text-lg font-bold text-gray-900 mb-4">
                Montant total : 32 400 XPF
                <div class="text-sm font-normal text-gray-600">Payable en une fois</div>
              </div>
              <div class="text-sm text-green-600 mb-4">
                <div>Prix à l'unité : 90 XPF/jeton</div>
                <div class="font-semibold">Économie totale : 3 600 XPF</div>
                <div class="font-semibold">(-10% sur le prix standard)</div>
              </div>
              <ul class="text-gray-600 space-y-3 mb-6">
                <li>30 jetons par mois</li>
                <li>Engagement 12 mois</li>
                <li>Support VIP</li>
                <li>Accès prioritaire aux nouveaux trajets</li>
              </ul>
              <button
                @click="handleSubscription('yearly')"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Souscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const TOKENS_PER_MONTH = 30
const BASE_TOKEN_PRICE = 100 // Prix unitaire du jeton en XPF

const handlePurchase = async (amount: number) => {
  // La logique d'achat sera implémentée avec Firebase plus tard
  console.log(`Achat de ${amount} jetons`)
}

const handleSubscription = async (plan: 'monthly' | 'sixMonths' | 'yearly') => {
  const discounts = {
    monthly: 0,
    sixMonths: 0.05,
    yearly: 0.10
  }
  
  const tokenPriceWithDiscount = BASE_TOKEN_PRICE * (1 - discounts[plan])
  const monthlyPrice = TOKENS_PER_MONTH * tokenPriceWithDiscount
  const duration = plan === 'monthly' ? 1 : plan === 'sixMonths' ? 6 : 12
  const totalPrice = monthlyPrice * duration
  const totalSavings = (BASE_TOKEN_PRICE * TOKENS_PER_MONTH * duration) - totalPrice
  
  console.log(`Souscription au plan ${plan}:`)
  console.log(`- Prix par jeton: ${tokenPriceWithDiscount} XPF`)
  console.log(`- Jetons par mois: ${TOKENS_PER_MONTH}`)
  console.log(`- Prix mensuel: ${monthlyPrice} XPF`)
  console.log(`- Prix total: ${totalPrice} XPF`)
  console.log(`- Économie totale: ${totalSavings} XPF`)
}
</script>