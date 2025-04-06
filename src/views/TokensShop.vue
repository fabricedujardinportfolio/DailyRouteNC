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
              <div class="text-2xl font-bold text-gray-900 mb-4">
                {{ formatPrice(calculatePriceWithCommission(1200)) }} XPF
                <div class="text-sm text-gray-500">
                  (dont {{ formatPrice(1200 * 0.30) }} XPF de commission)
                </div>
              </div>
              <p class="text-gray-600 mb-6">Idéal pour commencer</p>
              <button
                @click="handlePurchase(10)"
                :disabled="loading"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {{ loading ? 'Traitement...' : 'Acheter' }}
              </button>
            </div>

            <!-- Pack de 100 jetons -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-blue-50 border-blue-200">
              <div class="text-4xl font-bold text-blue-600 mb-2">100</div>
              <div class="text-lg font-medium mb-4">Jetons</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">
                {{ formatPrice(calculatePriceWithCommission(12000)) }} XPF
                <div class="text-sm text-gray-500">
                  (dont {{ formatPrice(12000 * 0.15) }} XPF de commission)
                </div>
              </div>
              <p class="text-gray-600 mb-6">Notre meilleure vente</p>
              <button
                @click="handlePurchase(100)"
                :disabled="loading"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {{ loading ? 'Traitement...' : 'Acheter' }}
              </button>
            </div>

            <!-- Pack de 1000 jetons -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="text-4xl font-bold text-blue-600 mb-2">1000</div>
              <div class="text-lg font-medium mb-4">Jetons</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">
                {{ formatPrice(calculatePriceWithCommission(120000)) }} XPF
                <div class="text-sm text-gray-500">
                  (dont {{ formatPrice(120000 * 0.15) }} XPF de commission)
                </div>
              </div>
              <p class="text-gray-600 mb-6">Pour les utilisateurs réguliers</p>
              <button
                @click="handlePurchase(1000)"
                :disabled="loading"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {{ loading ? 'Traitement...' : 'Acheter' }}
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
              <div class="text-4xl font-bold text-gray-900 mb-4">
                {{ formatPrice(calculatePriceWithCommission(3000)) }} XPF
              </div>
              <div class="text-lg text-gray-700 mb-2">par mois</div>
              <div class="text-base text-gray-600 mb-4">
                ({{ formatPrice(calculatePriceWithCommission(100)) }} XPF × 30 jetons)
              </div>
              <div class="text-lg font-bold text-gray-900 mb-4">
                Montant total : {{ formatPrice(calculatePriceWithCommission(3000)) }} XPF
                <div class="text-sm font-normal text-gray-600">Payable en une fois</div>
                <div class="text-sm text-gray-500">
                  (dont {{ formatPrice(3000 * 0.30) }} XPF de commission)
                </div>
              </div>
              <ul class="text-gray-600 space-y-3 mb-6">
                <li>30 jetons par mois</li>
                <li>Engagement 1 mois</li>
                <li>Annulation à tout moment</li>
              </ul>
              <button
                @click="handleSubscription('monthly')"
                :disabled="loading"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {{ loading ? 'Traitement...' : 'Souscrire' }}
              </button>
            </div>

            <!-- Abonnement 6 mois -->
            <div class="border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-blue-50">
              <div class="text-xl font-semibold text-blue-600 mb-2">6 Mois</div>
              <div class="text-4xl font-bold text-gray-900 mb-4">
                {{ formatPrice(calculatePriceWithCommission(2850)) }} XPF
              </div>
              <div class="text-lg text-gray-700 mb-2">par mois</div>
              <div class="text-base text-gray-600 mb-4">
                ({{ formatPrice(calculatePriceWithCommission(95)) }} XPF × 30 jetons)
              </div>
              <div class="text-lg font-bold text-gray-900 mb-4">
                Montant total : {{ formatPrice(calculatePriceWithCommission(17100)) }} XPF
                <div class="text-sm font-normal text-gray-600">Payable en une fois</div>
                <div class="text-sm text-gray-500">
                  (dont {{ formatPrice(17100 * 0.15) }} XPF de commission)
                </div>
              </div>
              <ul class="text-gray-600 space-y-3 mb-6">
                <li>30 jetons par mois</li>
                <li>Engagement 6 mois</li>
                <li>Support prioritaire</li>
              </ul>
              <button
                @click="handleSubscription('sixMonths')"
                :disabled="loading"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {{ loading ? 'Traitement...' : 'Souscrire' }}
              </button>
            </div>

            <!-- Abonnement annuel -->
            <div class="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="text-xl font-semibold text-blue-600 mb-2">Annuel</div>
              <div class="text-4xl font-bold text-gray-900 mb-4">
                {{ formatPrice(calculatePriceWithCommission(2700)) }} XPF
              </div>
              <div class="text-lg text-gray-700 mb-2">par mois</div>
              <div class="text-base text-gray-600 mb-4">
                ({{ formatPrice(calculatePriceWithCommission(90)) }} XPF × 30 jetons)
              </div>
              <div class="text-lg font-bold text-gray-900 mb-4">
                Montant total : {{ formatPrice(calculatePriceWithCommission(32400)) }} XPF
                <div class="text-sm font-normal text-gray-600">Payable en une fois</div>
                <div class="text-sm text-gray-500">
                  (dont {{ formatPrice(32400 * 0.15) }} XPF de commission)
                </div>
              </div>
              <ul class="text-gray-600 space-y-3 mb-6">
                <li>30 jetons par mois</li>
                <li>Engagement 12 mois</li>
                <li>Support VIP</li>
                <li>Accès prioritaire aux nouveaux trajets</li>
              </ul>
              <button
                @click="handleSubscription('yearly')"
                :disabled="loading"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {{ loading ? 'Traitement...' : 'Souscrire' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { calculatePriceWithCommission, formatPrice } from '../utils/priceCalculator';
import { purchaseTokens } from '../services/supabase/tokens';

const userStore = useUserStore();
const loading = ref(false);

const handlePurchase = async (amount: number) => {
  if (!userStore.isAuthenticated) {
    alert('Veuillez vous connecter pour effectuer un achat');
    return;
  }

  try {
    loading.value = true;
    await purchaseTokens(amount);
    alert(`Achat de ${amount} jetons effectué avec succès !`);
  } catch (error) {
    console.error('Erreur lors de l\'achat:', error);
    alert('Une erreur est survenue lors de l\'achat');
  } finally {
    loading.value = false;
  }
};

const handleSubscription = async (plan: 'monthly' | 'sixMonths' | 'yearly') => {
  if (!userStore.isAuthenticated) {
    alert('Veuillez vous connecter pour souscrire à un abonnement');
    return;
  }

  const plans = {
    monthly: {
      tokens: 30,
      duration: 1
    },
    sixMonths: {
      tokens: 180,
      duration: 6
    },
    yearly: {
      tokens: 360,
      duration: 12
    }
  };

  try {
    loading.value = true;
    const selectedPlan = plans[plan];
    await purchaseTokens(selectedPlan.tokens);
    alert(`Souscription au plan ${plan} effectuée avec succès !`);
  } catch (error) {
    console.error('Erreur lors de la souscription:', error);
    alert('Une erreur est survenue lors de la souscription');
  } finally {
    loading.value = false;
  }
};
</script>