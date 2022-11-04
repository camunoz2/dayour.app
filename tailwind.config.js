/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['auto-pro-new', 'sans-serif'],
        display: ['Gimlet Micro', 'sans-serif'],
      },
      colors: {
        pinky: '#FFDFDF',
        ['pale-orange']: '#FF6832',
        green: '#7AC38A',
        dark: '#332832',
      },
    },
  },
  plugins: [],
}
