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
        plum: {
          DEFAULT: "#62345B",
          dark: "#3A1E36",
        },
        pink: {
          DEFAULT: "#F1657C",
          deep: "#C93A5E",
          soft: "#FCE9EE",
        },
        ink: "#2A1228",
        muted: "#434343",
        orange: "#E8762C",
        sand: "#DEBB7E",
        canvas: "#F2F3F3",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 12px 40px -20px rgba(58, 30, 54, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
