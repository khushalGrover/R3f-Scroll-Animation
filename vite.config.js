import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'R3f-Scroll-Animation',
  plugins: [react()],
  server: {
    host: true
  },
})