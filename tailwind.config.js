/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#beb0a6',
        'secondary': '#b4a69a',
        'tertiary': '#ab9c8f',
        'dark-primary': '#232221',
        'dark-secondary': '#1a1918',
        'dark-tertiary': '#141312',
        'white20': 'rgba(255, 255, 255, 0.2)',
        'white50': 'rgba(255, 255, 255, 0.5)',
        'black-overlay':'rgba(0, 0, 0, 0.6)',
      },
      fontSize: {
        'vw-16': '16vw',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}