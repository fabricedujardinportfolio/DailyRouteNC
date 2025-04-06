<template>
  <div class="bg-white rounded-lg shadow p-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Réservations</h3>
    
    <div v-if="loading" class="text-center py-4">
      <p class="text-gray-600">Chargement des réservations...</p>
    </div>
    
    <div v-else-if="bookings.length === 0" class="text-center py-4">
      <p class="text-gray-600">Aucune réservation pour ce trajet</p>
    </div>
    
    <div v-else class="space-y-4">
      <div v-for="booking in bookings" :key="booking.id" class="border rounded-lg p-4">
        <div class="flex justify-between items-start">
          <div>
            <div class="font-medium text-gray-900">{{ booking.passenger_name }}</div>
            <div class="text-sm text-gray-600">
              {{ formatDate(booking.created_at) }}
            </div>
            <div class="mt-1">
              <span
                :class="{
                  'bg-yellow-100 text-yellow-800': booking.status === 'pending',
                  'bg-green-100 text-green-800': booking.status === 'confirmed',
                  'bg-red-100 text-red-800': booking.status === 'cancelled'
                }"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              >
                {{ getStatusText(booking.status) }}
              </span>
            </div>
          </div>
          
          <div class="flex space-x-2">
            <button
              v-if="booking.status === 'pending'"
              @click="handleConfirm(booking.id)"
              :disabled="loading"
              class="text-green-600 hover:text-green-700 text-sm px-3 py-1 border border-green-600 rounded hover:bg-green-50"
            >
              Accepter
            </button>
            <button
              v-if="booking.status === 'pending'"
              @click="handleCancel(booking.id)"
              :disabled="loading"
              class="text-red-600 hover:text-red-700 text-sm px-3 py-1 border border-red-600 rounded hover:bg-red-50"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '../../services/supabase';

interface Booking {
  id: string;
  passenger_name: string;
  created_at: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const props = defineProps<{
  routeId: string;
}>();

const emit = defineEmits<{
  (e: 'bookingUpdated'): void;
}>();

const loading = ref(false);
const bookings = ref<Booking[]>([]);

const loadBookings = async () => {
  try {
    loading.value = true;
    const { data: routeData, error } = await supabase
      .rpc('get_route_details', {
        p_route_id: props.routeId
      });

    if (error) throw error;
    bookings.value = routeData.bookings || [];
  } catch (error) {
    console.error('Erreur lors du chargement des réservations:', error);
  } finally {
    loading.value = false;
  }
};

const handleConfirm = async (bookingId: string) => {
  try {
    loading.value = true;
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) throw new Error('Utilisateur non authentifié');

    const { error } = await supabase
      .rpc('confirm_booking', {
        p_booking_id: bookingId,
        p_driver_id: user.id
      });

    if (error) throw error;
    await loadBookings();
    emit('bookingUpdated');
  } catch (error) {
    console.error('Erreur lors de la confirmation de la réservation:', error);
    alert('Erreur lors de la confirmation de la réservation');
  } finally {
    loading.value = false;
  }
};

const handleCancel = async (bookingId: string) => {
  try {
    loading.value = true;
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) throw new Error('Utilisateur non authentifié');

    const { error } = await supabase
      .rpc('cancel_booking', {
        p_booking_id: bookingId,
        p_user_id: user.id
      });

    if (error) throw error;
    await loadBookings();
    emit('bookingUpdated');
  } catch (error) {
    console.error('Erreur lors de l\'annulation de la réservation:', error);
    alert('Erreur lors de l\'annulation de la réservation');
  } finally {
    loading.value = false;
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'pending':
      return 'En attente';
    case 'confirmed':
      return 'Confirmée';
    case 'cancelled':
      return 'Annulée';
    default:
      return status;
  }
};

onMounted(loadBookings);
</script>