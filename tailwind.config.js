/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["*.{html,.php}", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
      'roboto'  : ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'kanit': ['Kanit', 'sans-serif'],
      sans : ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

