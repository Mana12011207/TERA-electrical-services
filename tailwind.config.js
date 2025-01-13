/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FFD700",
        },
        secondaryPrimary: {
          default: "#062439",
        },
        primaryAccent: {
          default: "#F5F5F5",
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
    },
  },
  plugins: [],
};
