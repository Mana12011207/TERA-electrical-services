/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD700",
        },
        secondaryPrimary: {
          DEFAULT: "#062439",
        },
        primaryAccent: {
          DEFAULT: "#FF5733",
        },
        secondaryAccent: {
          DEFAULT: "#C0C0C0",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
        zoomIn: "zoomIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
