/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        fontFamily: {
          Rubik: ["Rubik","sans-serif"],
        },
        colors: {
          'gray': "#666666",
          'dark-gray': "#1E232C",
          'light-gray':"#F1F1F1",
          'input-border': "#E8ECF4",
        }
      },
  },
  plugins: [],
}