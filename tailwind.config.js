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
        typeWriter1: "typeWriter1 8s steps(8) 0.5s 1 normal both, cursorBlink 0.5s infinite",
        typeWriter2: "typeWriter2 8s steps(5) 0.5s 1 normal both, cursorBlink 0.5s infinite",
        cursorBlink: "cursorBlink 0.5s infinite"
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
        typeWriter1: {
          from: {
            width: "0"
          },
          
          to: {
            width: "100%"
          }
        },
        typeWriter2: {
          from: {
            width: "0"
          },
          
          to: {
            width: "40%"
          }
        },
        cursorBlink: {
          from: {
            borderRight: "1px solid #dedede"
          },
          to: {
            borderRight: "1px solid #666"
          }
        }
      },
      backgroundImage: {
        'chapterBG': "url('../public/chapterBG.png')"
      }
    },    
  },
  plugins: [],
};
