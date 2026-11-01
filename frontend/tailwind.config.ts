import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        foreground: "#f8fafc",
        card: {
          DEFAULT: "#111827",
          foreground: "#f8fafc",
        },
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
          glow: "#818cf8",
        },
        secondary: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
        },
        darkSurface: "rgba(17, 24, 39, 0.7)",
        darkBorder: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "hero-glow":
          "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.18) 0%, rgba(14, 165, 233, 0.08) 35%, rgba(9, 13, 22, 0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 25px rgba(99, 102, 241, 0.35)",
        "glow-emerald": "0 0 25px rgba(16, 185, 129, 0.35)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        wave: "wave 1.5s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%, 100%": { height: "10px" },
          "50%": { height: "45px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
