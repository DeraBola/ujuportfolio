import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { pattaya: ["Pattaya", "sans-serif"] },
      backgroundImage: { "custom-image": "url('../assets/flowerBackground.svg')" },
      colors: { pink: { "400": "#C0694D", "500": "#B74C4C", "600": "#B05555" } },
      fontSize: {
        "xs": "12px",
        "sm": "14px",
        "md": "16px",
        "lg": "20px",
        "xl": "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
        "8xl": "68px"
      },
      animation: {
        slideUp: "slideUp .5s ease-in-out ",
        fade: "fade 1.5s ease "
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: "0.5" },
          "100%": { transform: "translateY(0%)", opacity: "1" }
        },
        fade: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" }
        }
      }
    },
  },
  plugins: [],
};

export default config;

