/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize:{
        xs: 10,
        sm: 12,
        md: 16, 
        lg: 32,
      },

      colors: {
        pink: {
          200: "#D9CDF7",
        },
      },
    },
  },
  plugins: [],
}
