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

      backgroundImage: {
        div9bg:
          "url('C:/react project digilabs/src/assets/img/images/DIV_9_BG.png')",
        div9bg_res:
          "url('C:/react project digilabs/src/assets/img/images/DIV_9_BG_RPS.png')",
      },

      
    },
  },
  plugins: [],
};
