import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0A192F", // Deep Navy
          foreground: "#64FFDA", // Neon Cyan
        },
        secondary: {
          DEFAULT: "#112240", // Lighter Navy
          foreground: "#CCD6F6", // Light Slate
        },
        accent: {
          DEFAULT: "#64FFDA", // Neon Cyan
          gold: "#FFD700", // Gold for premium feel
          danger: "#FF5555", // Red for threats
          warning: "#FFB86C", // Orange for alerts
          success: "#50fa7b", // Green for safe
        },
        muted: {
          DEFAULT: "#8892b0", // Slate
          foreground: "#a8b2d1",
        },
        card: {
          DEFAULT: "rgba(17, 34, 64, 0.7)",
          foreground: "#CCD6F6",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, #112240 1px, transparent 1px), linear-gradient(to bottom, #112240 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};
export default config;
