import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative links keep the site working on GitHub Pages' /repo-name/ address.
  base: './',
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
})
