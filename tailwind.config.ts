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
      colors: { pink: { "400": "#C0694D", "500": "#B74C4C", "600": "#B05555" } }
    },
  },
  plugins: [],
};

export default config;

