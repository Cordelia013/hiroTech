/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajoutez vos fichiers ici
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
       biryani: ['Biryani', 'sans-serif'],
     
    },
    extend: {
      colors: {
        Orange: '#FF4B15', 
        green: '#AACC26', 
        pink: '#FFB190', 
        white: '#fff',
        black: '#000',
        gray:"#D9D9D9"
        // Ajoutez d'autres couleurs selon votre charte graphique
      },
    },

    plugins: [],
  }

}