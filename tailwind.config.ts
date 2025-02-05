import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "#fff",
        backgroundDark: "#181D25",
      },
      backgroundImage: {
        lightGradient: "linear-gradient(to right, #CBC9E9, #E3E8FB, #FFE0F4)",
        darkGradient: "linear-gradient(to right, #33333B, #2C303E, #392B34)",
      },
    },
  },
  plugins: [],
} satisfies Config;
