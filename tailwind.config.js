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
    },
  },
  plugins: [addDynamicIconSelectors()]
}

export default config;

