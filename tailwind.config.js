/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      colors: {
        primary: '#007bff', // Replace with your primary color code
      },
    },
  },
  plugins: [require("daisyui")],
}