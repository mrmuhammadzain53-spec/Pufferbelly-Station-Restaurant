/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B1E1E', // Deep Red
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F5E9DA', // Cream
          foreground: '#2B2B2B',
        },
        accent: {
          DEFAULT: '#5A3E2B', // Warm Brown
          foreground: '#FFFFFF',
        },
        background: '#FFFFFF',
        foreground: '#2B2B2B',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
