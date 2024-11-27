/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#3279de",
        },
        secondaryPrimary: {
          default: "#9a75dc",
        },
        primaryAccent: {
          default: "##f1b65b",
        },
        secondaryAccent: {
          DEFAULT: "#29cca7",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
