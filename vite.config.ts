import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { existsSync, readdirSync } from 'node:fs'


const componentsDir = resolve('src/components')
const componentEntries = Object.fromEntries(
  readdirSync(componentsDir, { withFileTypes: true })
    .filter((entry)=> entry.isDirectory())
    .map((dirEntry)=> {
      const name = dirEntry.name
      const entryPath = resolve(componentsDir, name, 'index.ts')
      return existsSync(entryPath) ? [name, entryPath]: null
    })
    .filter((entry): entry is [string, string] => entry !== null)
)

console.log({componentEntries})

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve('src/index.ts'),
        ...componentEntries
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js'],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
