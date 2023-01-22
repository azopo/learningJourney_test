/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: { min: "2580px" },
      lg: { min: "1440px", max: "2580px" },
      md: { min: "768px", max: "1440px" },
      sm: { min: "360px", max: "767px" },
      xs: { max: "360px" },
    },
    fontFamily: {
      proxima: ["ProximaNova", "system-ui"],
      dm: ["DM Sans", "system-ui"],
    },
    extend: {
      colors: {
        primary: {
          0: "#FEC538",
          1: "#FFDA80",
        },
        secondary: "#00CA14",
      },
    },
  },
  plugins: [],
};
