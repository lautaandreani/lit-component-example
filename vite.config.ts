import { defineConfig } from 'vite'
import path from 'path';

const components = [
  'my-button',
  'ch-checkbox'
]

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
      output: components.map((component) => ({
          entryFileNames: `atoms/${component}.js`,
          format: 'es'
      }))
    },
  },
})