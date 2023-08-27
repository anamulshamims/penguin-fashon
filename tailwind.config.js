
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     colors:{
      'header-green':'#A4BC46',
      'banner-orange':'#FABE4C',
      'gray':'#363958',
     },
     fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      
    }
    },
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark", "cupcake"],
}


  

