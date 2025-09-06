import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 👈 Import the new plugin

export default defineConfig({
  plugins: [
    react(),
    // 👇 Add this plugin to copy index.html to 404.html after build
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: './',
          rename: '404.html'
        }
      ]
    })
  ],
  base: '/', // This is correct for a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});