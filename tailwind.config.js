const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Alef", ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
      serif: [...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        app: {
          sudoersBlack: "#181617",
          sudoersWhite: "#F4F3EF",
          sudoersGreen: "#7DC21C",
        },
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "disabled", "active"],
      cursor: ["disabled"],
      borderColor: ["checked"],
      ringWidth: ["hover", "active"],
      ringColor: ["focus"],
      boxShadow: ["active"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
