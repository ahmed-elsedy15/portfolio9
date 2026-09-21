import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: the site lives at https://<user>.github.io/portfolio9/
export default defineConfig({
  base: '/portfolio9/',
  plugins: [react()],
})
