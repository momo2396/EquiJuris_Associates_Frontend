/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      generalFont: ['"Outfit"', "sans-serif"],
      titleFont: ['"Cormorant_Garamond"', "serif"]
    },
  },
  plugins: [require("daisyui")],
}

