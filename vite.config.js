import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio9/',   // اسم الريبو بتاعك بالظبط
  plugins: [react()],
})