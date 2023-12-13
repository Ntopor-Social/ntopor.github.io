/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundcolor: ['dark'],
      textcolor: ['dark']
    },
  },
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "main-black": "#242424",
          "main-theme-color": "#36AA55",
          // "main-theme-color": "teal",
          "main-grey": "#797979",
          "main-grey-dark": "#D9D9D9",
          "main-off-white": "#F6F6F6"
        }
      },
    },
    plugins: [],
  }