import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        porcelain: "#F5F3EE",
        bronze: "#8C6A43",
        smoke: "#D9D2C5"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Georgia", "serif"]
      },
      letterSpacing: {
        brand: "0.08em"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 17, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
