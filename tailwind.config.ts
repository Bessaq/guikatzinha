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
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        glitch: 'glitch 0.3s ease infinite',
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(45deg, #FF6AD5, #26C6DA, #FFE45E, #72F1B8)',
        'retro-grid': 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;