<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
      <DocumentStatus :status="document?.verificationStatus" />
    </div>

    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
      <div v-if="document?.url" class="space-y-4">
        <img
          :src="document.url"
          :alt="title"
          class="max-w-full h-auto rounded-lg"
        />
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">
            Téléchargé le {{ formatDate(document.uploadDate) }}
          </span>
          <button
            @click="handleUpload"
            class="text-blue-600 hover:text-blue-700 text-sm"
          >
            Remplacer
          </button>
        </div>
      </div>
      <div v-else class="text-center">
        <div class="space-y-2">
          <div class="text-gray-500">
            <i class="text-3xl">📄</i>
          </div>
          <div class="text-sm text-gray-500">
            Format JPG ou PNG, max 5MB
          </div>
          <button
            @click="handleUpload"
            class="mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Télécharger le document
          </button>
        </div>
      </div>
    </div>

    <p v-if="document?.rejectionReason" class="text-sm text-red-600">
      Motif du rejet : {{ document.rejectionReason }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DocumentInfo } from '@/types/user';
import DocumentStatus from './DocumentStatus.vue';

const props = defineProps<{
  title: string;
  document?: DocumentInfo;
}>();

const emit = defineEmits<{
  (e: 'upload', file: File): void;
}>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR');
};

const handleUpload = async () => {
  try {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/png';
    
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert('Le fichier est trop volumineux. Maximum 5MB.');
          return;
        }
        emit('upload', file);
      }
    };
    
    input.click();
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
  }
};
</script>