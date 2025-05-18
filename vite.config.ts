import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
    },
  },
  server: {
    proxy:{'/api':{
      target: 'https://openlibrary.org',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }}
  }
})
