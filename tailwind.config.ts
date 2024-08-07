// Tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
        grey: "var(--font-grey-qo)",
        dance: "var(--font-dance)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        zebraLight: "rgb(var(--zebra-light-rgb))",
        zebraDark: "rgb(var(--zebra-dark-rgb))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
export default config;
