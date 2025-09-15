import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve'
    ? '/'
    : '/youtubeclone/',  // 🛑 Replace with your repo name
}));
