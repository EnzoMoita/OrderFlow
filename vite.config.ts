import path from "node:path";
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
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
  build: {
    sourcemap: false, // Desativa sourcemaps para produção
  }
} as UserConfig & {
  test: InlineConfig
});
