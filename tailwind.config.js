/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('../public/clean1.jpg')",
      },

      colors: {
        'black': '#000',
        'yellow': '#f1b31c',
        'white':'#FFFDFD',
        'blue':'#4A94F7',
        'black1':'#252525',
        'gold':'#FEDF30',
        'gray': '#D9D9D7'
  
       
      },
    },

   
  },
  plugins: [],
}
