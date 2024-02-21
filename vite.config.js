import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    base: '/lab-react-image-carousel-one-hooks-boilerplate'
,    plugins: [react()],
  };
});