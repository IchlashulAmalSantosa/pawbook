/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/path-to-your-image.jpg')",
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

