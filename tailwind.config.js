module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-from-top": "fadeFromTop 500ms ease-in-out",
        "fade-from-bottom": "fadeFromBottom 500ms ease-in-out",
        "slide-in": "slideIn 500ms ease-in-out",
        "slide-left": "slideLeft 500ms ease-in-out",
        "slide-right": "slideRight 500ms ease-in-out",
      },
      keyframes: {
        fadeFromTop: {
          "0%": { opacity: 0, transform: "translateY(-100px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeFromBottom: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
