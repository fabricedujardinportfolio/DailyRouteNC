import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'group-user': [
            './src/views/Login.vue',
            './src/views/Register.vue',
            './src/views/Profile.vue'
          ],
          'group-dashboard': [
            './src/views/Dashboard.vue',
            './src/views/SearchRoutes.vue',
            './src/views/TokensShop.vue'
          ]
        }
      }
    }
  },
  optimizeDeps: {
    include: ['vue-router', 'pinia', '@vueuse/core']
  }
})