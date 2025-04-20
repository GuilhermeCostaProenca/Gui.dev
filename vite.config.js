// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Coloca aqui seu repo exato do GitHub
export default defineConfig({
  base: "/Gui.dev/",
  plugins: [react()],
})
