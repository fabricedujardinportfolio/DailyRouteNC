<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
      <DashboardHeader :user="userStore.user" />
      
      <div v-if="loading" class="text-center py-8">
        <p class="text-gray-600">Chargement du tableau de bord...</p>
      </div>
      
      <template v-else>
        <DashboardStats :stats="stats" />
        <ActivityFeed :activities="activities" />
        
        <DriverDashboard
          v-if="isDriver"
          :driver-stats="driverStats"
        />
        
        <WalkerDashboard
          v-else
          :walker-stats="walkerStats"
        />
      </template>
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
import { fetchUserStats } from '../services/dashboard/stats';
import { fetchUserActivities } from '../services/dashboard/activities';
import type { DashboardStats as DashboardStatsType, Activity, DriverStats, WalkerStats } from '../types/dashboard';

const userStore = useUserStore();
const isDriver = computed(() => userStore.isDriver);
const loading = ref(true);

const stats = ref<DashboardStatsType>({
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
  if (!userStore.user) {
    loading.value = false;
    return;
  }

  try {
    loading.value = true;
    const [userStats, userActivities] = await Promise.all([
      fetchUserStats(userStore.user.id),
      fetchUserActivities(userStore.user.id)
    ]);
    
    stats.value = userStats.general;
    activities.value = userActivities;
    
    if (isDriver.value && userStats.driver) {
      driverStats.value = userStats.driver;
    } else if (!isDriver.value && userStats.walker) {
      walkerStats.value = userStats.walker;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données du tableau de bord:', error);
  } finally {
    loading.value = false;
  }
});
</script>