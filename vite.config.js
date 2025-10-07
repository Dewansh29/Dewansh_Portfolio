import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    // This is the configuration for the production build (npm run build)
    return {
      base: '/Dewansh_Portfolio/',
      plugins: [react()],
    };
  } else {
    // This is the configuration for local development (npm run dev)
    return {
      plugins: [react()],
    };
  }
});