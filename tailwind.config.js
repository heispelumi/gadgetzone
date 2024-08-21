/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f24c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen : "#2dcc6f",
        brandBlue : "#1376f4",
        brandWhite : "#eeeeee",

      },

      container: {
          center:true,
          padding:{
            default : '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
          }
      }

    },

  },
  plugins: [],
}