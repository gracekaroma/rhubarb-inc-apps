/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fairplay': ['Playfair Display'],
        'libre': ['Libre Baskerville']
      },
      colors: {
        'oren' : '#FFA043',
        'choco' : '#AC7364',
        'darkChoco' : '#2D1600',
        'abu' : '#A9A9A9'
      }
    },
  },
  plugins: [],
});