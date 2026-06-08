import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from '@eslint-react/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginNext from '@next/eslint-plugin-next';
import pluginImportX from 'eslint-plugin-import-x';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
  ]),

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (includes TS parser + @typescript-eslint recommended rules)
  ...tseslint.configs.recommended,

  // React (ESLint 10-native plugin)
  reactPlugin.configs.recommended,

  // React Hooks (flat config)
  reactHooksPlugin.configs['flat']['recommended-latest'],

  // JSX a11y, Next.js, imports — all TS files
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
    plugins: {
      'jsx-a11y': pluginJsxA11y,
      '@next/next': pluginNext,
      'import-x': pluginImportX,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Next.js
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,

      // Imports
      'import-x/no-anonymous-default-export': 'warn',

      // JSX a11y
      'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },

  // Prettier — must be last to disable formatting rules
  prettier,
]);
