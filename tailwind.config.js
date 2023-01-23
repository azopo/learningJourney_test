/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: { min: "1440px" },
      md: { min: "992px" },
      sm: { min: "360px" },
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
