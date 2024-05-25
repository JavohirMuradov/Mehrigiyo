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
    extend: {
      colors: {
        gray: "#6e7673",
        green: "#49a760",
        yellow: "#f7c35f",
        grey: "#b5c3be",
        footerGreen: "#255946"
      },
      backgroundImage: {
        'header': "url('./public/Group 1.png')",
        'footer': "url('./public/Desktop - 1.png')",
        footer1: "url('./public/ripped-paper-base-2.png')",
        footer2: "url('./public/ripped-paper-base.png')",
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotateY(360deg)' },
          '100%': { transform: 'rotateY(0)' },
        }
      },
      animation: {
        rotate: "rotate 2s infinite"
      }
    },
    fontFamily: {
      'nunito': ['Nunito'],
    },
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
  },
  plugins: [],
})

