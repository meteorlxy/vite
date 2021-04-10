import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['ts-debounce']
  },
  server: {
    force: true
  }
  // cacheDir: require('path').resolve(__dirname, '.vitepress/.cache')
})
