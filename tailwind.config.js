/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titulo: '#ffff',
        subTitulo: '#f8efed',
        gris: "#434144",
        amarillo: "#B18D08",
        nav:'rgba(89, 193, 235, 0.842)',
        colorBack: "rgba(217, 217, 217, 0.3)",
        grisPer: "#EAE8E6"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
