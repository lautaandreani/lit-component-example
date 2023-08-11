import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/components/my-button.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/],
    },
  },
})
