
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './' // ✅ dodaj ovo za sigurni Vercel routing
});
