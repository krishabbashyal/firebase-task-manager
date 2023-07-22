/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        fontFamily: {
          Rubik: ["Rubik","sans-serif"],
        },
        colors: {
          'light-gray': "#666666",
          'dark-gray': "#1E232C"
        }
      },
  },
  plugins: [],
}