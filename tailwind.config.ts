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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { pink: { "600": "#B05555A1" } }
    },
  },
  plugins: [],
};

export default config;

function rgba (arg0: number, arg1: number, arg2: number, arg3: number): string | import("tailwindcss/types/config").RecursiveKeyValuePair<string, string> {
  throw new Error("Function not implemented.");
}

