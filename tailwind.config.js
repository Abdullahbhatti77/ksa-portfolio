/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        grey: '#ECF0F3',
        pink: "#f9004d",
        primary: "#3c3e41",
        dark: "#1e2125",
        darkLight: "#AE0D40"
      },
      letterSpacing: { 
        '3px': '3px',
        '2px': '2px',
        '1px' : '1px',
      },
      lineHeight: {
        '30px': '30px',
        '28px': '28px',
      },
      borderRadius: {
        '10px': '10px', 
        "20px": "20px",
        '6px' : '6px',
      },
    },
  },
  plugins: [],
};