/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        "hero-img" : "url('./src/assets/home.png')",
        "form-bg" : "url('./src/assets/formbg.png')"
      },
      fontFamily:{
        playwrite : ["Playwrite HR", 'cursive'],
        roboto: ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

