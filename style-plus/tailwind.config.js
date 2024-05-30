/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "corporative": "#FEEE97",
	      "mobiles": "#EAB8FC",
        "webs": "#B5C9FF",
        "graphics": "#D098E3",
	      "mobile": "#EAB8FC",
        "web": "#CBDAFF",
        "graphic": "#CCC6F2",
        "corporate": "#F3E6A0",
        "black": "#000000",
        "yellow": "#FFD803",
        "dim": "#FEF6E4",
        "ash": "#353342",
        "white": "#FFFFFF",
        "white1": "#E2D8C0"
      },
      backgroundImage: (theme) => ({
        "dark bgImg":"url('./assets/bigblackframe(1).png')",
        "jumper": "url('./assets/Group 48095926.png')",
      }),
      fontFamily: {
        Sans: ["Plus Jakarta Sans", "sans-serif"],
      
      },
      content: {
        oneImg: "url('./assets/Rectangle 458.png')",
        twoIMg: "url('./assets/Rectangle 4460.png')",
        threeImg: "url('./assets/Rectangle 4662.png')",
        fourImg: "url('./assets/Rectangle 458.png')",
        fiveImg: "url('./assets/Rectangle 463.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};


