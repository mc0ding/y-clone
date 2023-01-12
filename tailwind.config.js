/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fit, minmax(12rem, 1fr))',
    },
    extend: {
      fontFamily: {
        dodum: ['"Gowun Dodum", "sans-serif"'],
      },
    },
  },
  plugins: [],
}
