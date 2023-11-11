/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourcesans3: ['Source Sans 3'],
        rubik: ['Rubik'], 
        poppins: ['Poppins']       
      }
    },
  },
  plugins: [],
}

