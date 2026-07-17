import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'Himnario Digital IPREC',
        short_name: 'Himnario IPREC',
        description: 'Himnario Digital IPREC con acordes y transposición',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [] // Los iconos se pueden agregar después
      }
    })
  ],
})
