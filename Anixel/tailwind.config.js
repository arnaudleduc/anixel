/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      snake: ["snake", "sans-serif"],
    },
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
        fadeInFast: {
          "0%": { opacity: 0, visibility: "hidden" },
          "100%": { opacity: 1, visibility: "visible" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-in-out forwards 1s",
        fadeOutFast: "fadeOut 0.3s ease-in-out forwards",
        fadeIn: "fadeIn 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
