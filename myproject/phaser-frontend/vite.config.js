import { defineConfig } from 'vite';

export default defineConfig({
  base: '/static/',
  build: {
    outDir: 'static',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/game.bundle.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/style.bundle.css'; 
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  },
  preview: {
    host: true,
    port: 5173
  }
});
