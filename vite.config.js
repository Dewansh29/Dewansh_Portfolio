import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// This is the final, correct config for both local development and deployment
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss()],
  };

  // This applies the '/Dewansh_Portfolio/' path ONLY when you run 'npm run build'
  if (command === 'build') {
    config.base = '/Dewansh_Portfolio/';
  }

  return config;
});