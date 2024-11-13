/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./*.html", // Incluye todos los archivos HTML en la raíz del proyecto
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos JavaScript o TypeScript en src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
