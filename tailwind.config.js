/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        size1: ["3rem", "3.5rem"],
        size2: ["2.5rem", "3.437rem"],
        size3: ["2rem", "2.75rem"],
        size4: ["1.125rem", "1.562rem"],
        size5: ["0.937rem", "1.562rem"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        c_blue_l: "rgb(62, 223, 229)",
        c_blue_d: "rgb(9,62,103)",
        c_grey: "rgb(119, 127, 152)",
        c_black: "rgb(8, 12, 32)",
        c_red: "rgb(255, 41, 101)",
        c_bg_l: "#FDF6D7",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "Manrope",
        }),
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
