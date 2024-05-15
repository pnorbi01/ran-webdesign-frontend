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
        xsxl: "400px",
        xsm: "540px",
        l: "769px",
      },
      keyframes: {
        animation: {
          growAndFade: "growAndFade 1s ease-in-out",
          grow: "grow 1s ease-in-out",
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
          heroFadeIn: "heroFadeIn 1s ease-in",
          firstWave: "firstWave 3.5s ease-in-out infinite",
          secondWave: "secondWave 3.5s ease-in-out infinite",
          thirdWave: "thirdWave 3.5s ease-in-out infinite",
          technologiesFirstLine: "technologiesFirstLine 3.5s infinite",
          technologiesSecondLine: "technologiesSecondLine 3.5s infinite",
          technologiesThirdLine: "technologiesThirdLine 3.5s infinite",
          technologiesFourthLine: "technologiesFourthLine 3.5s infinite",
          rising: "rising 100s ease-in-out infinite",
          starlight: "starlight 7s ease-in-out infinite",
          lineAnimationTop: "lineAnimationTop 6s ease-in-out infinite",
          lineAnimationBottom: "lineAnimationBottom 6s ease-in-out infinite",
          lineAnimationRotateTablet:
            "lineAnimationRotateTablet 5s ease-in-out infinite",
          lineAnimationRotateMobile:
            "lineAnimationRotateMobile 5s ease-in-out infinite",
          lightAnimation: "lightAnimation 5s ease infinite",
        },
        growAndFade: {
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        grow: {
          "0%": {
            height: 0,
          },
          "100%": {
            height: "7rem",
          },
        },
        opacity: {
          80: ".8",
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
        heroFadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
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
        firstWave: {
          "0%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          "90%, 100%": {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(5)",
          },
        },
        secondWave: {
          "0%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          "68%, 100%": {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(4)",
          },
        },
        thirdWave: {
          "0%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          "71%, 100%": {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(3)",
          },
        },
        technologiesFirstLine: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 1,
          },
          "86%, 100%": {
            opacity: 0,
            transform: "translateY(-250px)",
          },
        },
        technologiesSecondLine: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 1,
          },
          "86%, 100%": {
            opacity: 0,
            transform: "translateY(250px)",
          },
        },
        technologiesThirdLine: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 1,
          },
          "86%, 100%": {
            opacity: 0,
            transform: "translateX(250px)",
          },
        },
        technologiesFourthLine: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 1,
          },
          "86%, 100%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },
        },
        rising: {
          "0%": {
            transform: "translateZ(0) translateY(0)",
          },
          "100%": {
            transform: "translateZ(0) translateY(-2000px)",
          },
        },
        starlight: {
          "15%, 100%": {
            opacity: 0,
            transform: "translateY(-350px)",
          },
          "0%": {
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
        },
        lineAnimationTop: {
          "0%, 100%": {
            transform: "translateY(-200px)",
          },
          "99%": {
            transform: "translateY(760px)",
          },
        },
        lineAnimationBottom: {
          "0%, 100%": {
            transform: "translateY(530px)",
          },
          "99%": {
            transform: "translateY(-800px)",
          },
        },
        lineAnimationRotateTablet: {
          "0%": {
            transform: "translateY(200px) rotate(-180deg)",
          },
          "60%, 100%": {
            transform: "translateY(200px) rotate(-360deg)",
          },
        },
        lineAnimationRotateMobile: {
          "0%": {
            transform: "translateY(100px) rotate(-180deg)",
          },
          "60%, 100%": {
            transform: "translateY(100px) rotate(-360deg)",
          },
        },
        lightAnimation: {
          "0%, 100%": {
            opacity: 0.5,
            transform: "scale(1)",
          },
          "65%": {
            opacity: 1,
            transform: "scaleX(1.05)",
          },
        },
      },
    },
  },
  plugins: [nextui()],
};
