import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@skills-json': path.resolve(__dirname, './src/skills.json')
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/macros': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})