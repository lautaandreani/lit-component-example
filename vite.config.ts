import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import fs from 'fs'

const componentPath = path.join(__dirname, './src/components/atoms');
const componentFolders = fs.readdirSync(componentPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    lib: {
      entry: Object.fromEntries(
        componentFolders.map(folderName => [folderName, `./src/components/atoms/${folderName}/index.ts`])
      ),
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/],
      output: {
        entryFileNames: `components/atoms/[name].js`,
        format: 'es',
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
