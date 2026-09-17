/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        indigo: "var(--indigo)",
        cyan: "var(--cyan)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(108, 99, 255, 0.45)",
      },
    },
  },
  plugins: [],
};
