/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "15rem",
        "3xl": "8rem",
      },
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
      "3xl": "3840px",
    },
    extend: {
      colors: {
        primary: "#FB8600",
        secondary: "#023048",
        accent: "#575757",
        backgd: "#FFFFFF",
        // grey: "#383842",
        // darkgrey:"#5a5a5a",
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
      },
    },
    fontFamily: {
      noto: "Source Serif Pro",
      archivo: "Roboto",
    },
  },
  plugins: [],
}

