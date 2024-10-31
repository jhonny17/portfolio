/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const MAX_WIDTH = 1440;

const config: Config = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': `${MAX_WIDTH}px`,
      },
      screens: {
        '2xl': `${MAX_WIDTH}px`,
      },
      fontFamily: {
        logo: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
