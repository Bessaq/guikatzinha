import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neon: {
          pink: '#FF6AD5',
          blue: '#26C6DA',
          yellow: '#FFE45E',
          green: '#72F1B8',
        },
        retro: {
          purple: '#B24BF3',
          cyan: '#00FFF5',
        }
      },
      keyframes: {
        'edge-bounce-1': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100%, 100%)' },
          '50%': { transform: 'translate(0, 200%)' },
          '75%': { transform: 'translate(-100%, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'edge-bounce-2': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-100%, -100%)' },
          '50%': { transform: 'translate(0, -200%)' },
          '75%': { transform: 'translate(100%, -100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'edge-bounce-3': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100%, -100%)' },
          '50%': { transform: 'translate(200%, 0)' },
          '75%': { transform: 'translate(100%, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'edge-bounce-4': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-100%, 100%)' },
          '50%': { transform: 'translate(-200%, 0)' },
          '75%': { transform: 'translate(-100%, -100%)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      },
      animation: {
        'edge-bounce-1': 'edge-bounce-1 16s linear infinite',
        'edge-bounce-2': 'edge-bounce-2 20s linear infinite',
        'edge-bounce-3': 'edge-bounce-3 24s linear infinite',
        'edge-bounce-4': 'edge-bounce-4 18s linear infinite',
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(45deg, #FF6AD5, #26C6DA, #FFE45E, #72F1B8)',
        'retro-grid': 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;