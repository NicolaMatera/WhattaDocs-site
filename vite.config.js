import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/WhattaDocs-site/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        start: resolve(__dirname, 'start.html'),
        resources: resolve(__dirname, 'resources.html'),
      },
    },
  },
})