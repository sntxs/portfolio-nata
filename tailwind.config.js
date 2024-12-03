/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3436',
        'secondary': '#636E72',
        'accent': '#B2BEC3',
        'light': '#DFE6E9',
        'dark': '#1E272E'
      },
    },
  },
  plugins: [],
}