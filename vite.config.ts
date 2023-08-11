import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/components/atoms/my-button/my-button.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/],
    },
  },
})
