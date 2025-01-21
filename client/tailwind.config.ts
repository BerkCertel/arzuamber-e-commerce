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
        primary: "#441752",
        primaryLight: "#5C216B", // Bir ton açık
        primaryDark: "#310C3A", // Bir ton koyu

        secondary: "#8174A0",
        secondaryLight: "#9A8BB6", // Bir ton açık
        secondaryDark: "#675B84", // Bir ton koyu

        third: "#A888B5",
        thirdLight: "#C1A0CC", // Bir ton açık
        thirdDark: "#8F6E95", // Bir ton koyu

        fourth: "#EFB6C8",
        fourthLight: "#F6CDD8", // Bir ton açık
        fourthDark: "#D89DAC", // Bir ton koyu

        ratingcolor: "#FAAF00",

        mywhite: "#FFFFFF", // En beyaz
        myblack: "#000000", // En siyah
      },
    },
  },
  plugins: [],
} satisfies Config;
