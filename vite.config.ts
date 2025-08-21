

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({

  plugins: [react(), ],
  base: process.env.VITE_BASE_URL || '/meal-maker',
  server: {
    proxy: {

      '/api': {
        target: 'https://api.edamam.com',
        changeOrigin: true,

        rewrite: (path) => path.replace(/^\/api/, ''),

      },

    },
  },
});
