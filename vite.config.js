import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Substitua 'repo-name' pelo nome do seu repositório
  
  build: {
    outDir: 'dist', // Pasta onde o build será colocado
    rollupOptions: {
      input: 'index.html', // Arquivo de entrada
    },
  },
});
