import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#A4161A",
          light: "#C32127",
          dark: "#7A1015",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#404040",
          mute: "#6B6B6B",
        },
        cloud: "#F4F4F5",
        line: "#E5E5E5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-a": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(50px,-70px) scale(1.15)" },
          "66%":     { transform: "translate(-35px,40px) scale(0.9)" },
        },
        "blob-b": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "40%":     { transform: "translate(-60px,50px) scale(1.1)" },
          "75%":     { transform: "translate(40px,-35px) scale(0.92)" },
        },
        "blob-c": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%":     { transform: "translate(30px,-50px) scale(1.12)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.35" },
          "50%":     { opacity: "0.75" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "grid-flow": {
          "0%":   { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 60px" },
        },
        "sweep": {
          "0%":   { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        "rise": {
          "0%,100%": { transform: "translateY(0)",   opacity: "0.4" },
          "50%":     { transform: "translateY(-18px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee:      "marquee 28s linear infinite",
        "blob-a":     "blob-a 11s ease-in-out infinite",
        "blob-b":     "blob-b 14s ease-in-out infinite",
        "blob-c":     "blob-c 18s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        "float-y":    "float-y 6s ease-in-out infinite",
        "spin-slow":  "spin-slow 24s linear infinite",
        "grid-flow":  "grid-flow 2.4s linear infinite",
        sweep:        "sweep 6s ease-in-out infinite",
        rise:         "rise 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
