<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <!-- En-tête du tableau de bord -->
      <DashboardHeader :user="userStore.user" />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <!-- Statistiques générales -->
        <DashboardStats :stats="stats" />
        
        <!-- Activité récente -->
        <div class="lg:col-span-2">
          <ActivityFeed :activities="activities" />
        </div>
      </div>

      <!-- Section spécifique au type d'utilisateur -->
      <div class="mt-6">
        <template v-if="isDriver">
          <DriverDashboard :driverStats="driverStats" />
        </template>
        <template v-else>
          <WalkerDashboard :walkerStats="walkerStats" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import DashboardHeader from '../components/dashboard/DashboardHeader.vue';
import DashboardStats from '../components/dashboard/DashboardStats.vue';
import ActivityFeed from '../components/dashboard/ActivityFeed.vue';
import DriverDashboard from '../components/dashboard/DriverDashboard.vue';
import WalkerDashboard from '../components/dashboard/WalkerDashboard.vue';
import { fetchUserStats, fetchUserActivities } from '../services/dashboard';
import type { DashboardStats, Activity, DriverStats, WalkerStats } from '../types/dashboard';

const userStore = useUserStore();
const isDriver = computed(() => userStore.isDriver);

const stats = ref<DashboardStats>({
  totalTrips: 0,
  totalDistance: 0,
  averageRating: 0,
  tokensBalance: 0
});

const activities = ref<Activity[]>([]);
const driverStats = ref<DriverStats>({
  totalEarnings: 0,
  totalPassengers: 0,
  completedTrips: 0,
  upcomingTrips: [],
  earnings: {
    total: 0,
    commission: 0,
    net: 0
  }
});

const walkerStats = ref<WalkerStats>({
  totalSpent: 0,
  favoriteDrivers: [],
  upcomingTrips: [],
  savedRoutes: []
});

onMounted(async () => {
  if (userStore.user) {
    try {
      const [userStats, userActivities] = await Promise.all([
        fetchUserStats(userStore.user.id),
        fetchUserActivities(userStore.user.id)
      ]);
      
      stats.value = userStats.general;
      activities.value = userActivities;
      
      if (isDriver.value) {
        driverStats.value = userStats.driver;
      } else {
        walkerStats.value = userStats.walker;
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données du tableau de bord:', error);
    }
  }
});
</script>