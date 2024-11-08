/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#0a6acb",
        },
        secondaryPrimary: {
          default: "#ebebeb",
        },
        accent: {
          default: "#f26419",
        },
        secondaryAcctent: {
          DEFAULT: "#f6a02d",
        },
      },
      fontFamily: {
        sans: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
