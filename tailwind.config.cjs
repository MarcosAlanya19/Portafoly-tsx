/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', "sans-serif"],
      },
      colors: {
        primary: ['#FF0971'],
        primary2: ['#FFD900']
      }
    },
  },
  plugins: [],
}
