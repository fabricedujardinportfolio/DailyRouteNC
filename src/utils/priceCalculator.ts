import { ref } from 'vue';

// Taux de commission pour les achats (30% pour les petits montants, 15% pour les gros montants)
const COMMISSION_RATE = {
  HIGH: 0.30, // 30% pour les montants < 10000 XPF
  LOW: 0.15   // 15% pour les montants >= 10000 XPF
};

export function calculatePriceWithCommission(basePrice: number): number {
  const rate = basePrice >= 10000 ? COMMISSION_RATE.LOW : COMMISSION_RATE.HIGH;
  const commission = basePrice * rate;
  return Math.round(basePrice + commission);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR').format(price);
}