/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "font-family: 'Ubuntu', sans-serif;"
      },
      colors: {
        gr: "#FFDEE9"
      },
      backgroundImage: {
        gradient : "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
      }
    },
  },
  plugins: [],
}
