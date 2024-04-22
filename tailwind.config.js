/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "375px", // Ajoutez la taille d'écran "xs" avec une valeur de 375px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"], // Remplacez "YourCustomFont" par le nom de votre police
      },
      backgroundImage: {
        "bg-mobile": "url('./assets/images/background-pattern-mobile.svg')",
        "bg-desktop": "url('./assets/images/background-pattern-desktop.svg')",
      },
      colors: {
        highlighted: "#AD28EB",
      },
    },
  },
  plugins: [],
};
