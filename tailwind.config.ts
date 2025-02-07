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
        gray: {
          600: "#4E5562",
          700: "#333D4C",
          900: "#181D25",
        },
      },
      spacing: {
        "204": "51rem",
        "49": "12.25rem",
        "44.5": "11.125rem",
        "32.5": "8.125rem",
        "18": "4.5rem",
        "76.5": "19.125rem",
        "76": "19rem",
      },
      fontSize: {
        D3: [
          "4rem",
          {
            lineHeight: "4.75rem",
            fontWeight: "700",
          },
        ],
        H3: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        lightGradient: "linear-gradient(to right, #CBC9E9, #E3E8FB, #FFE0F4)",
        darkGradient: "linear-gradient(to right, #33333B, #2C303E, #392B34)",
      },
    },
  },
  plugins: [],
} satisfies Config;
