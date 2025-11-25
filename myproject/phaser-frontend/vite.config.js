import { defineConfig } from 'vite';

// ... imports

export default defineConfig({
  base: '/static/',
  build: {
    outDir: '../static',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // 1. JS goes here (as before)
        entryFileNames: 'js/game.bundle.js',
        
        // 2. CSS and Images go here
        // We use a function to force CSS to be named 'style.bundle.css'
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/style.bundle.css'; 
          }
          // Images/Fonts keep their hashes for safety
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});