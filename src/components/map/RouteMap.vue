<template>
  <div class="h-[600px] w-full rounded-lg overflow-hidden" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

// Coordonnées du centre de Nouméa
const NOUMEA_CENTER = [-22.2758, 166.4580];

onMounted(() => {
  if (!mapContainer.value) return;

  // Initialisation de la carte
  map = L.map(mapContainer.value).setView(NOUMEA_CENTER, 12);

  // Ajout du layer OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Correction des icônes Leaflet
  const defaultIcon = L.icon({
    iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
    shadowUrl: '/node_modules/leaflet/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  L.Marker.prototype.options.icon = defaultIcon;
});

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>