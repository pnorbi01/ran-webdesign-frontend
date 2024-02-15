const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        xsl: "300px",
        xsm: "540px",
        l: "769px",
      },
      keyframes: {
        animation: {
          rotate: "rotate 15s ease-in-out infinite",
          fadeIn: "fadeIn 0.5s ease-in-out",
          fadeInBottom: "fadeInBottom 0.5s ease-in-out",
          fadeInTop: "fadeInTop 0.5s ease-in-out",
          fadeInLeft: "fadeInLeft 0.5s ease-in-out",
          fadeInRight: "fadeInRight 0.5s ease-in-out",
          fadeInAndOut: "fadeInAndOut 1s ease-in",
          fadeInAndStay: "fadeInAndStay 1s ease-in",
          flyingObject: "flyingObject 20s ease-in-out infinite",
          float: "float 1s ease-in-out infinite",
          heartBeat: "heartBeat 1s ease-in-out infinite",
          scaleDown: "scaleDown 2s ease-in-out",
          scaleDownMobile: "scaleDownMobile 2s ease-in-out",
          expandOpacity: "expandOpacity 6s ease-in-out infinite",
          expand: "expand 6s ease-in-out infinite",
        },
        opacity: {
          80: ".8",
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(1turn)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "70%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeInBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(30px)",
          },
          "70%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-15px)",
          },
          "70%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            transform: "translateX(-50px)",
          },
          "70%": {
            opacity: 0.9,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            transform: "translateX(50px)",
          },
          "70%": {
            opacity: 0.9,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInAndOut: {
          "0%": {
            opacity: 0,
            transform: "translateY(15px)",
          },
          "30%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "95%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
          },
        },
        fadeInAndStay: {
          "0%": {
            opacity: 0,
            transform: "translateY(15px)",
          },
          "30%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        flyingObject: {
          "0%": {
            transform: "translate(0) rotate(0deg)",
          },
          "20%": {
            transform: "translate(73px,-1px) rotate(36deg)",
          },
          "40%": {
            transform: "translate(141px,72px) rotate(72deg)",
          },
          "60%": {
            transform: "translate(83px,122px) rotate(108deg)",
          },
          "80%": {
            transform: "translate(-40px,72px) rotate(144deg)",
          },
          "100%": {
            transform: "translate(0) rotate(0deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        heartBeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },
        scaleDown: {
          "0%": {
            margin: "30vh 0px",
            opacity: "0",
            width: "500px",
            height: "500px",
          },
          "20%": {
            opacity: "1",
            width: "500px",
            height: "500px",
          },
          "100%": {
            "margin-top": "0px",
            opacity: "1",
            width: "70px",
            height: "70px",
          },
        },
        scaleDownMobile: {
          "0%": {
            margin: "40vh 0px",
            opacity: "0",
            width: "300px",
            height: "300px",
          },
          "20%": {
            opacity: "1",
            width: "300px",
            height: "300px",
          },
          "100%": {
            "margin-top": "0px",
            opacity: "1",
            width: "70px",
            height: "70px",
          },
        },
        expandOpacity: {
          "0%": {
            opacity: "0",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.3)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1.2)",
          },
        },
        expand: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [nextui()],
};
