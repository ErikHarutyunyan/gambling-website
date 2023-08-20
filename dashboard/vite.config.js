import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr({
    svgrOptions: {
      ref: true,
    },
  }), eslint()],
  // server: {
  //   port: 3000,
  //   host: true
  // },
})
