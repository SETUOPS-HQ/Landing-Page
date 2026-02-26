/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0da6f2",
        "emerald-accent": "#10b981",
        "neon-highlight": "#34d399",
        "background-light": "#f5f7f8",
        "background-dark": "#0a1017",
        "navy-900": "#0f172a",
        "navy-800": "#1e293b",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
