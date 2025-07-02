/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A237E', // Deep Blue
          dark: '#0D1333',
        },
        accent: {
          DEFAULT: '#43A047', // Green
          light: '#C8E6C9',
        },
        background: {
          DEFAULT: '#F5F6FA',
          dark: '#1A1A1A',
        },
        gray: {
          100: '#F5F6FA',
          200: '#E0E3E7',
          300: '#B0BEC5',
        },
        error: '#E53935',
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}; 