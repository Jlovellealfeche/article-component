/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    colors:{
      current: "white",
    },
    extend: {
      fontFamily: {
        primary:"Manrope",
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        
      }
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },


  },
  plugins: [],
}

