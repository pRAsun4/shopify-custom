/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{liquid,json,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        xxm: '360px',
        sm: '640px',
        md: '750px',
        lg: '1024px',
        xl: '1440px',
        x2lg: '1920px',
      }
    },
    extend: {},
  },
  plugins: [],
}

