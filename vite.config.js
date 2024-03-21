import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'MainLayout',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
