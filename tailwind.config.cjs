/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      mn: 10,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 48,
      '2xl': 32,
      '3xl': 24
    },
    borderColor: {
      grey: {
        300: "#E6E5E5"
      },
      purple: {
        400: "#8047F8"
      }
    },
    colors: {
      purple: {
        100: "#EBE5F9",
        200: "#8047F8",
        300: "#4B2995",
      },
      grey: {
        100: "#F3F2F2",
        200: "#8D8686",
        300: "#E6E5E5",
        400: "#574F4D",
        500: "#EDEDED",
        600: "#403937"
      },
      yellow: {
        100: "#F1E9C9",
        200: "#C47F17"
      }
    },
    fontFamily: {
      Nunito:  'Nunito, sans-serif', 
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      maxWidth: {
        xs: "16rem"
      },
    },
  },
  plugins: [],
}