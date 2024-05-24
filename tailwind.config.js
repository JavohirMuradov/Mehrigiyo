/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      colors: {
        gray: "#6e7673",
        green: "#49a760",
        yellow: "#f7c35f",
        grey: "#b5c3be"
      },
      backgroundImage: {
        'header': "url('./public/Group 1.png')",
        'footer': "url('./public/Desktop - 1.png')"
      }
    },
  },
  plugins: [],
})

