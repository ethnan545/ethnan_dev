import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#2b7bf5", dark: "#1d5fd0", soft: "#e8f0fe" },
        ink: { DEFAULT: "#1a2233", soft: "#5b6578", faint: "#8a93a4" },
      },
      fontFamily: { sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"] },
      boxShadow: {
        glass: "0 20px 50px -20px rgba(43,123,245,.35), 0 2px 0 rgba(255,255,255,.8) inset",
        pill: "0 8px 30px -12px rgba(43,123,245,.35)",
      },
    },
  },
  plugins: [],
};
export default config;
