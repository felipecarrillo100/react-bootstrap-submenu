import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      'react-bootstrap-submenu/dist/index.css': path.resolve(__dirname, '../dist/index.css'),
      'react-bootstrap-submenu': path.resolve(__dirname, '../dist/index.mjs'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 8000,
    open: true,
  },
});
