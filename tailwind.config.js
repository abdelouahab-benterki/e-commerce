/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      primary: "#2E2E2E",
      secondary: "#5B5B5B",
      background: "#F6F6F6",
    },
  },
  plugins: [],
};
