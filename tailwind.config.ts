import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4488FC",   // main blue
          hover: "#2C5EB4",
          light: "#EAF1FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;

