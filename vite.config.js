import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-deploy-demo/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000
  }
})
