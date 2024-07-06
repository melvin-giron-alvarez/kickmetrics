/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '668px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dimwhite': '#EFEEED',
      'grey': '#6F6F6F',
      'black': '#0B1314',
    },
  },
  plugins: [],
}

