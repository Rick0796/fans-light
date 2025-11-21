
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Critical: Allows the app to run in subdirectories or without a root domain
  resolve: {
    alias: {
      // Fix: Use path.resolve('./') instead of __dirname to avoid TS error "Cannot find name '__dirname'"
      '@': path.resolve('./'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for production to save size
    rollupOptions: {
      output: {
        manualChunks: {
          // Removed 'aos' from here because it is loaded via CDN in index.html to avoid build errors
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
