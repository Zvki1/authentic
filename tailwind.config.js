/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans'],
        'poppins': ['Poppins', 'sans'],
      },
      colors:{
        "Neutral":{
          "Black":"#000000",
          "90":"#252E36",
          "50":"#A4B0C1",
          "20":"#E3E4E4",
          "10":"#F9F9F9",
          "White":"#FFFFFF",
        },
        "Primary":{
        "Night-Blue":"#012A65",
        "Ocean-Blue":"#477FF6",
        "Sky-Blue":"#68A6FD",
        "Cloud-Blue":"#CDE1FE",
        },
        "Secondary":{
          "Tchina-Orange":"#FF731D",
          "Mandarin-Orange":"#F9A526",
          "Success":"#5CFF8A",
          "ERROR-404":"#FF5C5C",
          },
      },
      
    },
  },
  plugins: [],
};

