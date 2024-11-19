/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out 2s",
        slideIn: "slideIn 1.5s ease-in-out 2s",
        slideInLeft: "slide-in-left 0.5s ease-in 2s both",
        bottomTop: "bottomTop 0.5s easeInOutQuad 1.8s both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-1000px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bottomTop: {
          "0%": {
            transform:
              "translate3d(0, 0%, 0) scale3d(0, 0, 0) rotateX(1) rotateY(1) rotateZ(1) skew(1, 1)",
            opacity: "0",
          },
          "100%": {
            transform:
              "translate3d(0, 90%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        'chapterBG': "url('../public/chapterBG.png')"
      }
    },    
  },
  plugins: [],
};
