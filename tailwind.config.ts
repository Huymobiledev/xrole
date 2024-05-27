import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "serif"],
        Roboto: ["RobotoSerif", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#5FC118",
        primaryBlack: "#141414",
        lightSilver: "#d9d9d9",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  corePlugins: {
    appearance: false,
  },
};
export default config;
