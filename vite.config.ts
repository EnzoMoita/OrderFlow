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
    sourcemap: false,  // Desativa sourcemaps para produção
    rollupOptions: {
      output: {
        // Configuração de chunks manual para bibliotecas grandes ou comuns
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Retorna o nome do pacote
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Aumenta o limite de aviso de tamanho de chunk para 1000kb
  }
} as UserConfig & {
  test: InlineConfig
});
