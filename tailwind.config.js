/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',   // Cambiado de 1024px a 1280px
      xl: '1440px',
      '2xl': '1536px',
    },
    extend: {
    },
  },
  plugins: [],
}
