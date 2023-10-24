/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollbar: {
        thin: "thin",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
