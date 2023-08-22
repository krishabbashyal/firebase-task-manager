/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        fontFamily: {
          Rubik: ["Rubik","sans-serif"],
        },
        colors: {
          'off-white': "#F5F5F5",
          'accent-dark': "#1E232C",
          'accent-neutral': "#6A707C",
          'accent-light':"#35C2C1",
          'create-separation': "#E8ECF4",
          'form-placeholder': "#8391A1",
          'error-text': "#991B1B",
          'error-border':"#EF4444",
          'error-banner': "#FFB1B1",
          'success-banner':"#a7f3d0",
          'success-text': "#059669",
        }
      },
      screens: {
        'xs': '320px',
        'sm': '380px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
  },

  plugins: [],
}