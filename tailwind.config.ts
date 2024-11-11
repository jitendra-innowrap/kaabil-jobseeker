import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-red)",
        foreground: "var(--foreground)",
      },
      animation: {
        "infinite-slider": "infiniteSlider 20s linear infinite",
        "infinite-slider-reverse": "infiniteSliderReverse 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" }, // Adjust based on your item width
        },
        infiniteSliderReverse: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(250px * 5))" }, // Adjust based on your item width
        },
      },
    },
  },
  plugins: [],
};
export default config;
