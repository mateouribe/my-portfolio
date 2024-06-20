// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        white: "#FFFFFF",
        lightGray: "#D3D3D3",
        gray: "#808080",
        darkGray: "#4B4B4B",
        silver: "#C0C0C0",
        dimGray: "#696969",
        gainsboro: "#DCDCDC",
        darkOrange: "#FF4C00",
        darkBlue: "#0075FF",
        lightOrange: "#FFA57F",
        veryLightOrange: "#FFE9E0",
        almostWhiteOrange: "#FFF7F4",
      },
      fontFamily: {
        Darkmode: ["Darkmode", "sans-serif"],
      },
      padding: {
        mobile: "24px",
        tablet: "50px",
        desktop: "96px",
      },
      fontSize: {
        37: "37px",
        32: "32px",
        28: "28px",
        25: "25px",
        22: "22px",
        20: "20px",
        19: "19px",
        18: "18px",
        16: "16px",
        14: "14px",
      },
      spacing: {
        5: "5px",
        8: "8px",
        10: "10px",
        20: "20px",
        30: "30px",
        50: "50px",
        100: "100px",
        view: "100vh",
      },
      screens: {
        lg: "1180px",
      },
      borderRadius: {
        2: "2px",
        5: "5px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        20: "20px",
        30: "30px",
        rounded: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".text-title": {
            "@apply text-28 md:text-32 lg:text-37 tracking-tight": {},
          },
          ".text-importantParagraph": {
            "@apply text-16 md:text-18 tracking-tight": {},
          },
          ".padding-section": {
            "@apply p-mobile md:p-tablet lg:p-desktop": {},
          },
          ".padding-section-y": {
            "@apply py-mobile md:py-tablet lg:py-desktop": {},
          },
          ".padding-section-x": {
            "@apply px-mobile md:px-tablet lg:px-desktop": {},
          },
          ".padding-section-l": {
            "@apply pl-mobile md:pl-tablet lg:pl-desktop": {},
          },
          ".absolute-centered": {
            "@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
              {},
          },
        },
        ["responsive"]
      );
    }),
  ],
};
