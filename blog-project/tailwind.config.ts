import type { Config } from "tailwindcss";
//import typography from "@tailwindcss/typography";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {},
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
