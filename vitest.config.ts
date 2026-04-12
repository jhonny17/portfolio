/// <reference types="vitest" />
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config';

const MIN_COVERAGE_PERCENTAGE = 100;

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      include: [
        'src/**/*.{ts,tsx}',
        '!src/**/index.ts',
        '!src/**/*.d.ts',
        '!src/**/*.test.{ts,tsx}',
      ],
      thresholds: {
        statements: MIN_COVERAGE_PERCENTAGE,
        branches: MIN_COVERAGE_PERCENTAGE,
        functions: MIN_COVERAGE_PERCENTAGE,
        lines: MIN_COVERAGE_PERCENTAGE,
      },
    },
  },
});
