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
        DEFAULT: '100%',
        sm: '100%',
        md: '750px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    extend: {},
  },
  plugins: [],
}

