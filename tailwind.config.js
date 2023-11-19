/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#cacfd6',
        'raisinblack': '#393140',
        'sage': '#8aa8a1',
        'gunmetal': '#30343f',
        'redpurple': '#a5243d',
      },
      fontFamily:{
        'artsy': ['Cookie'],
        'paintish': ['Homemade Apple'],
        'typewriter-light': ['Averia Serif Libre', 'Light'],
        'typewriter-lightitalic': ['Averia Serif Libre', 'Light', 'italic'],
        'typewriter-bold': ['Averia Serif Libre', 'Bold'],
        'typewriter-bolditalic': ['Averia Serif Libre', 'Bold', 'italic'],
      },
    },
  },
  plugins: [],
}

