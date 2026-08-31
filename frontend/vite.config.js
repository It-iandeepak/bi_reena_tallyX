import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert()
  ],
  server: {
    host: true, // Listen on all local IPs
    https: true, // Enable HTTPS
    proxy: {
      // Proxy API requests to backend to avoid Mixed Content when on HTTPS
      '/api': {
        target: 'http://localhost:5001', // Local backend URL
        changeOrigin: true
      }
    }
  }
})
