import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    lib: {
      entry: './src/components/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/],
      output: {
        entryFileNames: `components/[name]/index.js`,
        format: 'es',
      },
    },
  },
})