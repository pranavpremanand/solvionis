/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c69f7",
        // primary: "#e59e04",
        // primary: "#f2ad18",
        secondary: "#9D92FB",
        // secondary: "#ed6810",
        // tertiary: "#e59e04",
        // tertiary: "#f2ad18",
        tertiary: "#2c69f7",
        background: "#f1f1f1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
      },
    },
  },
  plugins: [],
};
