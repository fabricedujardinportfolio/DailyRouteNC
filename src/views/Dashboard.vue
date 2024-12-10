<template>
  <!-- Previous template code remains the same -->
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
  if (userStore.user) {
    try {
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
    }
  }
});
</script>