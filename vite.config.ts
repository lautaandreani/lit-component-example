import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/],
      output: {
        entryFileNames: `components/[name]/[name].js`,
        format: 'es',
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
