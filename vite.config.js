import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/city-quest-landing_/', // GitHub Pages repository base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
