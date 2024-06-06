import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DURAZNO: {
          DEFAULT: '#ffebcd',
          light: '#ffebcd',
        }
      },
      boxShadow: {
        'braille': '1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [addDynamicIconSelectors()]
}

export default config;

