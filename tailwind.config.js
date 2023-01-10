module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Tahoma",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "64px",
      md: "768px",
      lg: "1024px",
      df: "1023px",
      sf: "666px",
      xl: "1234px",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#7F56D9",
        lav: "#9D0AFF",
        footer: "#151531",
        white: '#FFFFFF'
      },

      spacing: {
        ms: "0.0075rem",
      },
      
    },
  },
  plugins: [],
};
