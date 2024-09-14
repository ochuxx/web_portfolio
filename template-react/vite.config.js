import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
<<<<<<< HEAD
      '@styles': path.resolve(__dirname, './src/styles')
=======
      '@styles': path.resolve(__dirname, './src/styles'),
      '@skills-json': path.resolve(__dirname, './src/skills.json'),
>>>>>>> 2847d45 (.gitignore añadido)
    },
  },
  plugins: [react()]
})