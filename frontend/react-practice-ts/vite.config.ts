import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      "@": "/src",
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://13.209.197.216/:8003',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
