const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ['Archivo', 'sans-serif'],
      },
      boxShadow:{
        base: '0px 0px 5px -2px',
      },
    },
  },
  plugins: [],
}