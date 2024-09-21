import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
