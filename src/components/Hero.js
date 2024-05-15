import React from "react";
import bgCircles from "../assets/images/bgCircles.svg";
import logo from "../assets/images/logo.png";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ExpoIcon,
  PhpIcon,
  JavaIcon,
  JavaScriptIcon,
  NodeJsIcon,
  AppleIcon,
  AndroidIcon,
  TailwindIcon,
  ReactIcon,
  FireIcon,
  StarIcon,
} from "../assets/icons/Icons";

function Hero() {
  return (
    <section className="flex flex-row justify-center xs:items-start l:items-start min-h-min">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-2/3 gap-3 xs:mt-32 gap-5 z-10">
        <>
          <div className="flex flex-row justify-center items-center bg-[#050407] rounded-md p-1 px-2">
            <span className="text-white font-semibold text-md">
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
        <div className="h-28">
          <div
            className="animate-[grow_1s_ease-in-out] w-[1px] bg-[#f3eeff1f] rounded-full"
            style={{
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          />
        </div>
        <div
          className="animate-[growAndFade_1s_ease-in-out] opacity-0 flex flex-row justify-center items-flex-start border border-[#f3eeff1f] w-auto p-3 rounded-md"
          style={{
            animationDuration: "1.2s",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col justify-start items-start w-1/2 gap-2">
            <FireIcon size={20} />
            <span className="text-[#757575] text-xs uppercase text-left">
              10+ finished projects
            </span>
          </div>
          <div className="flex flex-col justify-start items-start w-1/2 gap-2">
            <div className="flex flex-row justify-start items-center">
              <StarIcon size={20} />
              <StarIcon size={20} />
              <StarIcon size={20} />
              <StarIcon size={20} />
              <StarIcon size={20} />
            </div>
            <span className="text-[#757575] text-xs uppercase text-left">
              5 reviews
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-28 h-10">
          <div className="flex flex-row justify-center items-center relative w-full h-full">
            <a
              href="https://www.facebook.com/profile.php?id=61552789026395"
              className="animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-0 top-0 border-2 border-[#363541] z-20"
              style={{
                animationDelay: "1.9s",
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
                animationDelay: "2.1s",
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
                animationDelay: "2.3s",
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
          className="animate-[fadeInTop_0.5s_ease-in-out] opacity-0 text-white/70 font-normal text-xs"
          style={{
            animationDelay: "2.5s",
            animationFillMode: "forwards",
          }}
        >
          Reach us on our social media platforms
        </span>
        <div
          className="animate-[fadeInTop_0.5s_ease-in-out] opacity-0 flex flex-col justify-center items-center xs:w-full xl:w-1/2 gap-1"
          style={{
            animationDelay: "2.8s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-row justify-center items-flex-start w-full gap-1">
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <ReactIcon color={"#737373"} />
            </div>
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <TailwindIcon color={"#737373"} />
            </div>
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <JavaIcon color={"#737373"} />
            </div>
          </div>
          <div className="flex flex-row justify-center items-flex-start w-full gap-1">
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <AppleIcon color={"#737373"} />
            </div>
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <AndroidIcon color={"#737373"} />
            </div>
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <NodeJsIcon color={"#737373"} />
            </div>
          </div>
          <div className="flex flex-row justify-center items-flex-start w-full gap-1">
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <JavaScriptIcon color={"#737373"} />
            </div>
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <PhpIcon color={"#737373"} />
            </div>
            <div className="flex justify-center items-center p-2 bg-[#0e0e1b] w-1/3">
              <ExpoIcon color={"#737373"} />
            </div>
          </div>
        </div>
      </div>
      <img
        src={bgCircles}
        alt="Bg circles"
        loading="lazy"
        className="absolute -top-6 -left-5 h-auto"
      />
      <div className="background-hero">
        <div className="hero-gradient"></div>
      </div>
    </section>
  );
}

export default Hero;
