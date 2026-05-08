import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },
      colors: {
        orange: {
          DEFAULT: "#FF6A00",
          light:   "#FF8C42",
          dim:     "rgba(255,106,0,0.12)",
        },
        dark: {
          DEFAULT: "#0B0B0B",
          surface: "#111111",
          card:    "#141414",
          border:  "#1e1e1e",
        },
      },
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(135deg, #FF6A00 0%, #FF8C42 60%, #FFB347 100%)",
      },
      boxShadow: {
        "orange-glow":  "0 0 20px rgba(255,106,0,0.35)",
        "orange-glow2": "0 0 40px rgba(255,106,0,0.55)",
      },
      animation: {
        "pulse-dot": "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
