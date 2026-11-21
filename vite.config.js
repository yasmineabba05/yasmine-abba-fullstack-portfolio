import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "base: './'" + HashRouter : le site marche sur GitHub Pages ET en double-cliquant dist/index.html
const classicScript = {
  name: 'classic-script',
  transformIndexHtml: { order: 'post', handler: (html) => html.replace(/ type="module" crossorigin/g, ' defer') },
}
export default defineConfig({
  base: './',
  plugins: [react(), classicScript],
  build: { modulePreload: false, rollupOptions: { output: { format: 'iife', inlineDynamicImports: true } } },
})
