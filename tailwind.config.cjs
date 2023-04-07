/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC5185",
        lightPrimary: "#767676",
        mask: "#111418",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
      textShadow: {},
      maxWidth: {},
      backgroundImage: {
        hero: "url('./src/assets/img/hero1.jpg?url')",
        "gradient-primary": ` linear-gradient(135deg, hsla(342, 97%, 65%, 1) 50%, hsla(321, 81%, 54%, 1) 100%)`,
      },

      screens: {
        xsm: "530px",
      },
    },
  },
  plugins: [],
};
