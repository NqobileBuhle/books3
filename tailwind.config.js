/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
      primary: '#755139FF', 
      secondary: '#D4B996FF',
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      
    },},
  },
  plugins: [],
}

