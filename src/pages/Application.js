import React from "react";
import FlexibleTechnologicalCapacityCard from "../components/application/FlexibleTechnologicalCapacityCard";
import TailoredProcessCard from "../components/application/TailoredProcessCard";
import ResponsiveUIAndUXCard from "../components/application/ResponsiveUIAndUXCard";
import ITAndBusinessApproachCard from "../components/application/ITAndBusinessApproachCard";
import heroLight from "../assets/images/hero-light.png";
import Advantage from "../components/application/Advantage";
import Opportunity from "../components/application/Opportunity";
import RisingStar from "../components/animations/RisingStar";
import SuperiorMobileAppCard from "../components/application/SuperiorMobileAppCard";
import DevelopmentTeamCard from "../components/application/DevelopmentTeamCard";
import HiringCard from "../components/application/HiringCard";
import EnhanceAppCard from "../components/application/EnhanceAppCard";
import mobileAppHeroLogo from "../assets/images/mobile-app-hero-logo.png";

function Application() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] relative">
        <div className="rising-stars w-full h-[300px] absolute xs:top-0 md:top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <RisingStar
            animDurationFirst={"50s"}
            animDurationSecond={"80s"}
            animDurationThird={"100s"}
          />
        </div>
        <img
          src={heroLight}
          loading="lazy"
          alt="Contact hero light"
          className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-[20%]"
        />
        <img
          src={mobileAppHeroLogo}
          loading="lazy"
          alt="Mobile app hero logo"
          width={350}
          height={350}
          className="animate-[heroFadeIn_1s_ease-in] opacity-0 z-20"
          style={{
            animationDuration: "0.65s",
            animationFillMode: "forwards",
          }}
        />
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
            <span className="font-medium text-md text-center text-white">
              Mobile Application
            </span>
          </div>
          <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-white text-center xs:w-[90%] md:w-[70%]">
            Everything you need. Nothing you don't*
          </h1>
          <p className="text-[#8b98a5] text-xl text-center xs:w-[80%] lg:w-[35%]">
            Unleash the power of mobile application development.
          </p>
        </div>
        <Advantage />
        <div className="line flex flex-col justify-start items-center xs:w-full space-y-10 pt-24 mb-44 relative">
          <div className="line-light absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full"></div>
          <div className="flex flex-col justify-center items-center gap-5 xs:w-full xl:w-1/2">
            <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
              <span className="font-medium text-md text-center text-white">
                Dive Deeper
              </span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Dream it. We'll make it come true
            </span>
          </div>
          <Opportunity />
        </div>
        <div className="line flex flex-col justify-start items-center xs:w-full space-y-10 mb-44 pt-24 relative">
          <div className="line-light absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full"></div>
          <div className="flex flex-col justify-center items-center gap-5 xs:w-full xl:w-1/2 mt-20">
            <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
              <span className="font-medium text-md text-center text-white">
                Solutions
              </span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Meet the solutions that we offer
            </span>
          </div>
          <div className="grid grid-cols-2 auto-rows-[500px] xs:w-full 2xl:w-2/3 gap-5 m-auto">
            <FlexibleTechnologicalCapacityCard />
            <TailoredProcessCard />
            <ResponsiveUIAndUXCard />
            <ITAndBusinessApproachCard />
          </div>
        </div>
        <div className="line flex flex-col justify-start items-center xs:w-full space-y-10 pt-24 relative">
          <div className="line-light absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full"></div>
          <div className="flex flex-col justify-center items-center gap-5 xs:w-full xl:w-1/2 mt-20">
            <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
              <span className="font-medium text-md text-center text-white">
                Problems
              </span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Common problems our customers come to us in case of mobile app
              development
            </span>
          </div>
          <div className="grid grid-cols-2 auto-rows-[500px] xs:w-full 2xl:w-2/3 gap-5 m-auto">
            <SuperiorMobileAppCard />
            <DevelopmentTeamCard />
            <HiringCard />
            <EnhanceAppCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
