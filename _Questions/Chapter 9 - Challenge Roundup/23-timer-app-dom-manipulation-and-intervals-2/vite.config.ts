import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
    setupFiles: './tests/setup.js',
    testTimeout: 20000,
  },
});
