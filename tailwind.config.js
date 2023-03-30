/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        "Lora": ['Lora', 'sans'],
        "Poppins": ['Poppins', 'sans-serif']
      } 
    },
  },
  plugins: [],
}
