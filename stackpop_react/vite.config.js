import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/fishes': {
      target: 'http://localhost:3000'
      } 
    }
  }
})