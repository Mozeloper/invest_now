module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        primary: "#E32526",
        secondary: "#FFFAFA",
        tertiary: "#465174",
        pink: "#FFF0F0",
        white: "#FFFFFF",
        red: "#FE0000",
        black: "#000000",
        gray: "#DADADA",
        lightGray: "#E6EAEE",
        headerColor: "#7B839C",
        BACKGROUND_RED: "#FE0000",
        BACKGROUND_GREEN: "#00C48C",

        BACKGROUND_GRAY: "#E5E5E5",
        BACKGROUND_WHITE: "#FFFFFF",
      },
      fontFamily: {
        CenturyGothic: ["Century Gothic"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
