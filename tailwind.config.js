/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cart: "url('src/assets/belanja.jpg')",
      },
    },
  },
  plugins: [],
};
