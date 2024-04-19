/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"], // Remplacez "YourCustomFont" par le nom de votre police
      },
    },
  },
  plugins: [],
};
