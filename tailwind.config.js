const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        laptop: { max: "1535px" },
        xl: { max: "1279px" },
        tablet: { max: "1023px" },
        lg: { max: "1023px" },
        mobile: { max: "767px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      // fontFamily: {
      // 	sans: ["var(--font-family)", ...defaultTheme.fontFamily.sans],
      // 	"sans-serif": [
      // 		"var(--font-family)",
      // 		...defaultTheme.fontFamily.serif,
      // 	],
      // },
      colors: {
        primary: "#135EA8",
        secondary: "#2D3047",
        blue: {
          500: "#1890FF",
          250: "#E8F2FC",
        },
        gray: {
          400: "#78909C",
          100: "#CFD8DC",
          200: "#F0F0F0",
          250: "#F8F8F8",
          50: "#F6EFEE",
          150: "#E5E5E5",
          800: "#37474F",
          700: "#2D3047",
          600: "#CCCCCC",
        },
        main: "#F8F8F8",
        green: {
          400: "#22AAA1",
        },
        yellow: {
          400: "#FFB300",
        },
      },
      fontSize: {
        "3xl": "2.0625rem",
      },
      inset: {
        "14-i": "3.5rem !important",
        "1/43": "43% !important",
      },
      margin: {
        "0-i": "0 !important",
        "2-i": "0.5rem !important",
      },
      padding: {
        "0-i": "0 !important",
        "3-i": "0.75rem !important",
      },
      borderRadius: {
        "full-i": "9999px !important",
      },
      minWidth: {
        12: "12rem !important",
        3: "3rem !important",
        64: "16rem !important",
      },
      width: {
        68: "17rem !important",
        "3/4-i": "75% !important",
        98: "28rem !important",
      },
      height: {
        100: "36rem !important",
      },
      zIndex: {
        max: 999,
        "2max": 10000,
      },
      cursor: {
        allScroll: "all-scroll",
      }
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      transform: ["hover", "focus"],
      cursor: ['hover'],
    },
  },
  plugins: [lineClamp],
};
