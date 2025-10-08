import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// This is the final, correct config that works for BOTH local dev and live deployment
export default defineConfig(({ command }) => {
  // This is the configuration for your local server (npm run dev)
  // It's the same as your original file, so it will work correctly.
  const config = {
    plugins: [react(), tailwindcss()],
  };

  // This 'if' statement adds the special 'base' path ONLY when you run 'npm run deploy'
  if (command === 'build') {
    config.base = '/Dewansh_Portfolio/';
  }

  return config;
});