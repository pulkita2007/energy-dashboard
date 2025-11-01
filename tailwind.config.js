/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1720",
        surface: "#111827",
        card: "#0b1320"
      }
    }
  },
  plugins: []
};


