/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      snake: ["SNAKE", "sans-serif"],
    },
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-in-out forwards 1s",
      },
    },
  },
  plugins: [],
};
