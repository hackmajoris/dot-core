const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      black: "#323232",
      blue: "#4D69FA",
      darkBlue: "#2B176C",
      lightBlue: "#81B2D0",
      brandYellow: "#CDA37B",
      yellow: "#FFBB36",
      brandDarkWhite: "#DFE4EB",
      brandPurple: "#4420B3",
      brandLightWhite: "#E6EAF7",
      brandWhite: "#F6F6FE",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
