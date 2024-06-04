/** @type {import('tailwindcss').Config} */
export default {
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
        lightOrange: "#FFA57F",
        veryLightOrange: "#FFE9E0",
        almostWhiteOrange: "#FFF7F4",
      },
      // fontFamily: {
      //   nHasGrotexk: ["NHaasGroteskTXPro", "sans-serif"],
      //   swearDisplay: ["SwearDisplay", "serif"],
      // },
      padding: {
        mobile: "24px",
        tablet: "50px",
        desktop: "96px",
      },
      fontSize: {
        titleDesktop: "37px",
        titleTablet: "32px",
        titleMobile: "28px",
        subtitleDesktop: "25px",
        subtitleTablet: "22px",
        subtitleMobile: "19px",
        paragraph: "16px",
        small: "14px",
      },
      spacing: {
        5: "5px",
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
        8: "8px",
        10: "10px",
        20: "20px",
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
  plugins: [],
};
