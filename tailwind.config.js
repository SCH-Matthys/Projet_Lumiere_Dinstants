/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["assets/src/*/.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'], // Police pour tout le corps de la page
        title: ['Tangerine'], // Police pour les titres spécifiques
      },
    },
  },
  plugins: [],
}

