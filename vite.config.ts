import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig } from "vite";
import type { InlineConfig } from 'vitest';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@tanstack/react-query']  // Inclua aqui os módulos que deseja pré-transpilar
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
} as UserConfig & InlineConfig);
