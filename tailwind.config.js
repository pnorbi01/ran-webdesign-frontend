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
          fadeIn: "fadeIn 0.5s ease-in-out",
          fadeInBottom: "fadeInBottom 0.5s ease-in-out",
          fadeInTop: "fadeInTop 0.5s ease-in-out",
          fadeInLeft: "fadeInLeft 0.5s ease-in-out",
          heartBeat: "heartBeat 3.5s ease infinite",
          heroFadeIn: "heroFadeIn 1s ease-in",
          firstWave: "firstWave 3.5s ease-in-out infinite",
          secondWave: "secondWave 3.5s ease-in-out infinite",
          thirdWave: "thirdWave 3.5s ease-in-out infinite",
          developmentTeamWave: "developmentTeamWave 3.5s ease-in-out infinite",
          technologiesFirstLine: "technologiesFirstLine 3.5s infinite",
          technologiesSecondLine: "technologiesSecondLine 3.5s infinite",
          technologiesThirdLine: "technologiesThirdLine 3.5s infinite",
          technologiesFourthLine: "technologiesFourthLine 3.5s infinite",
          rising: "rising 100s ease-in-out infinite",
          starlight: "starlight 7s ease-in-out infinite",
          lineAnimationTop: "lineAnimationTop 6s ease-in-out infinite",
          lineAnimationBottom: "lineAnimationBottom 6s ease-in-out infinite",
          lineAnimationLeft: "lineAnimationLeft 6s ease-in-out infinite",
          lineAnimationRight: "lineAnimationRight 6s ease-in-out infinite",
          lineAnimationRotateTablet:
            "lineAnimationRotateTablet 5s ease-in-out infinite",
          lineAnimationRotateMobile:
            "lineAnimationRotateMobile 5s ease-in-out infinite",
          lightAnimation: "lightAnimation 5s ease infinite",
          tailoredProcessAnim: "tailoredProcessAnim 4s ease-in-out infinite",
          superiorAppStrokAnim1:
            "superiorAppStrokAnim1 3.5s ease-in-out infinite",
          superiorAppStrokAnim2:
            "superiorAppStrokAnim2 3.5s ease-in-out infinite",
          superiorAppStrokAnim3:
            "superiorAppStrokAnim3 3.5s ease-in-out infinite",
          superiorAppStrokAnim4:
            "superiorAppStrokAnim4 3.5s ease-in-out infinite",
          superiorAppStrokAnim5:
            "superiorAppStrokAnim5 3.5s ease-in-out infinite",
          superiorIconAnim: "superiorIconAnim 3.5s ease infinite",
          starAnimation: "starAnimation 2.4s ease infinite",
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
        heartBeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
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
        lineAnimationLeft: {
          "0%, 100%": {
            transform: "translateX(-350px)",
          },
          "99%": {
            transform: "translateX(150px)",
          },
        },
        lineAnimationRight: {
          "0%, 100%": {
            transform: "translateX(350px)",
          },
          "99%": {
            transform: "translateX(-150px)",
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
        tailoredProcessAnim: {
          "0%": {
            transform: "rotate(0)",
          },
          "25%": {
            transform: "rotate(7deg)",
          },
          "50%": {
            transform: "rotate(0)",
          },

          "75%": {
            transform: "rotate(-7deg)",
          },
          "100%": {
            transform: "rotate(0)",
          },
        },
        superiorAppStrokAnim1: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 0,
          },
          "40%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        superiorAppStrokAnim2: {
          "0%": {
            opacity: 0,
          },
          "30%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        superiorAppStrokAnim3: {
          "0%": {
            opacity: 0,
          },
          "40%": {
            opacity: 0,
          },
          "60%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        superiorAppStrokAnim4: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "70%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        superiorAppStrokAnim5: {
          "0%": {
            opacity: 0,
          },
          "60%": {
            opacity: 0,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        superiorIconAnim: {
          "0%, 100%": {
            transform: "scale(1) translateY(-50%) translate(-50%)",
          },
          "50%": {
            transform: "scale(1.03) translateY(-50%) translate(-50%)",
          },
        },
        developmentTeamWave: {
          "0%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(0)",
          },
          "71%, 100%": {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(1.3)",
          },
        },
        starAnimation: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.6)",
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
