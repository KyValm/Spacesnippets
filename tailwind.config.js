/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#00040f",
      navcolor: "#1c1c1c",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
    },
    transitionProperty: {
      'transform': 'transform',
    },
    transitionDuration: {
      '200': '200ms',
      '500': '500ms',
      '1000': '1000ms',
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];
