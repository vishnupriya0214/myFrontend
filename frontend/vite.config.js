import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: process.env.ALLOWED_HOSTS ? 
      process.env.ALLOWED_HOSTS.split(',') : 
      ['localhost', '.onrender.com']
  }
})