import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // or any other port you want to try
    host: true, // This allows access from your mobile device using your IP address
  },
  plugins: [react()],
})
