import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '~',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  assetsInclude: ['src'],
  server: {
    port: 3000
  },
  css: {
    modules: {
      generateScopedName: '[name]-[local]__[hash:base64:5]',
      hashPrefix: 'prefix'
    }
  }
})
