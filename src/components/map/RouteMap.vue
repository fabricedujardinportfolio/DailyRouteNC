<template>
  <div class="h-[600px] w-full rounded-lg overflow-hidden" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icon issues
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

// Coordonnées du centre de Nouméa
const NOUMEA_CENTER: L.LatLngTuple = [-22.2758, 166.4580];

onMounted(() => {
  if (!mapContainer.value) return;

  // Fix default icon
  const defaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  L.Marker.prototype.options.icon = defaultIcon;

  // Initialisation de la carte
  map = L.map(mapContainer.value).setView(NOUMEA_CENTER, 12);

  // Ajout du layer OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
});

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>