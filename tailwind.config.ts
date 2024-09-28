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
        primary: {
          light: '#9F7AEA', // Roxo claro
          DEFAULT: '#7C3AED', // Roxo principal
          dark20: '#8B5CF6',
          dark: '#6B21A8', // Roxo escuro
        },
        secondary: {
          light: '#4B5563', // Cinza claro
          DEFAULT: '#1F2937', // Cinza principal
          dark: '#111827', // Cinza escuro
        },
        background: {
          primary: '#111827', // Background dark principal
          secondary: '#1E1E2E', // Background dark secundário (custom)
        },
        text: {
          primary: '#E5E7EB', // Texto principal (cinza claro)
          secondary: '#9CA3AF', // Texto secundário (cinza intermediário)
        },
        accent: {
          DEFAULT: '#F472B6', // Acento rosa vibrante para contraste
        },
        backgroundImage: {
          'gradient-purple-pink': 'linear-gradient(90deg, #8B5CF6 0%, #D946EF 100%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
