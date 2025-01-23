/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        mainColorLight: "#57534e",
        mainColorDark: "#ffffff66",
      },
    },
  },

  plugins: [],
};
