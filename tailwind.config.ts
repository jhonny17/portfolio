/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const MAX_WIDTH = 1440;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/domains/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        top: '0 -1px 3px 0 var(--tw-shadow-color)',
      },
      maxWidth: {
        '8xl': `${MAX_WIDTH}px`,
      },
      screens: {
        '2xl': `${MAX_WIDTH}px`,
      },
    },
  },
  plugins: [],
};
export default config;
