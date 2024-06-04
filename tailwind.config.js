/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{liquid,json,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        DEFAULT: '100%',
        
      }
    },
    extend: {},
  },
  plugins: [],
}

