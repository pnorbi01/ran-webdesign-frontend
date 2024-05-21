import React from "react";
import logo from "../assets/images/logo.png";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeHero from "../assets/images/home-hero-img.png";

function Hero() {
  return (
    <section className="flex flex-col items-center xs:justify-start l:justify-start min-h-min">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-2/3 gap-3 xs:mt-32 gap-5 z-10">
        <>
          <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
            <span className="font-medium text-md text-center text-white">
              Web & Mobile App Development
            </span>
          </div>
          <h1
            className="animate-[heroFadeIn_1s_ease-in] opacity-0 text-white font-extrabold xs:text-5xl md:text-7xl py-2 text-center"
            style={{
              animationDuration: "0.65s",
              animationFillMode: "forwards",
            }}
          >
            Build your project with us*
          </h1>
        </>
        <>
          <p
            className="animate-[fadeInTop_0.5s_ease-in-out] opacity-0 text-xl text-[#8b98a5] text-center lg:w-1/2 xs:w-full"
            style={{
              animationDelay: "0.8s",
              animationFillMode: "forwards",
            }}
          >
            Unlock the power of swift and collaborative web development.
          </p>
        </>
        <div className="flex flex-row justify-center items-center w-28 h-10 z-10">
          <div className="flex flex-row justify-center items-center relative w-full h-full">
            <a
              href="https://www.facebook.com/profile.php?id=61552789026395"
              className="animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-0 top-0 border-2 border-[#363541] z-20"
              style={{
                animationDelay: "1.5s",
                animationFillMode: "forwards",
              }}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="xl"
                className="text-[#65646b] hover:cursor-pointer w-full h-full"
              />
            </a>
            <div
              className="animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-8 top-0 border-2 border-[#363541] z-10"
              style={{
                animationDelay: "1.7s",
                animationFillMode: "forwards",
              }}
            >
              <img
                src={logo}
                width={25}
                height={25}
                loading="lazy"
                alt="RAN Webdesign logo"
              />
            </div>
            <a
              href="https://twitter.com/RANWebdesign"
              className="animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-16 top-0 border-2 border-[#363541] z-0"
              style={{
                animationDelay: "1.9s",
                animationFillMode: "forwards",
              }}
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size="xl"
                className="text-[#65646b] hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        <span
          className="animate-[fadeInTop_0.5s_ease-in-out] opacity-0 text-white/70 font-normal text-xs z-10"
          style={{
            animationDelay: "2.1s",
            animationFillMode: "forwards",
          }}
        >
          Reach us on our social media platforms
        </span>
      </div>
      <div className="relative w-full xs:h-[300px] md:h-[431px] z-0 overflow-hidden">
        <img
          src={homeHero}
          alt="Hero light"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
