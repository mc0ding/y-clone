/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
      },
      fontFamily: {
        dodum: ['"Gowun Dodum", "sans-serif"'],
      },
    },
  },
  plugins: [],
}
