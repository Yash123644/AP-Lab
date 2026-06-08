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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "medical-teal": "#008080",
        "deep-navy": "#02050D",
        "primary-purple": "#7b39fc",
        "dark-purple": "#2b2344",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-inter)"],
        cabin: ["var(--font-inter)"],
        instrument: ["var(--font-inter)"],
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "blink": {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "1", boxShadow: "0 0 10px #fff" },
        },
        "wobble": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "blink": "blink 1.5s ease-in-out infinite",
        "wobble": "wobble 4s ease-in-out infinite",
        "wobble-reverse": "wobble 4s ease-in-out infinite reverse",
        "shimmer": "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
