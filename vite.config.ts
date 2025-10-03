import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { webcrypto as nodeWebCrypto } from 'node:crypto';

// Ensure crypto.getRandomValues exists for tools (e.g., nanoid) used by Vite during startup
if (
  !(globalThis as any).crypto ||
  typeof (globalThis as any).crypto.getRandomValues !== 'function'
) {
  (globalThis as any).crypto = nodeWebCrypto;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts'
  }
});
