/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgwhite':'#F5F5F5',
        'bgblack':'#121212',
        'filler':'#F05454',
        'customblue':'#30475E'
      },
      fontFamily:{
        'mono':['Azeret Mono', 'monospace']
      }
    },
  },
  plugins: [],
}