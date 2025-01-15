import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        secondary: "#8174A0",
        third: "#A888B5",
        fourth: "#EFB6C8",
        mywhite: "#F9F6E6",
        myblack: "#1D1616",
      },
    },
  },
  plugins: [],
} satisfies Config;
