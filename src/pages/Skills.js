import React from "react";
import backend from "../assets/images/back-end.png";
import fire from "../assets/images/fire.svg";
import frontend from "../assets/images/front-end.png";
import highPerformance from "../assets/images/high-performance.svg";
import optimized from "../assets/images/optimized.svg";
import secure from "../assets/images/secure.svg";
import skillHeadline from "../assets/images/skill-headline-image.png";
import smooth from "../assets/images/smooth.svg";
import unique from "../assets/images/unique.svg";
import userFriendly from "../assets/images/user-friendly.svg";
import bgImage from "../assets/images/bgImage.webp";

function Skills() {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col justify-center items-center gap-5 mt-20 z-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={skillHeadline}
            loading="lazy"
            alt="Skills headline"
            className="xs:animate-[scaleDownMobile_2s_ease-in-out] md:animate-[scaleDown_2s_ease-in-out] opacity-0 w-[70px] h-[70px] drop-shadow-lg transition-all"
            style={{
              animationDuration: "1.8s",
              animationFillMode: "forwards",
            }}
          />
          <h3
            className="animate-[fadeInTop_0.5s_ease-in-out] opacity-0 font-bold text-lg text-[#8b98a5] text-center"
            style={{ animationDelay: "2s", animationFillMode: "forwards" }}
          >
            Skills
          </h3>
        </div>
        <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-white text-center xs:w-[90%] md:w-[70%]">
          Meet our knowledge*
        </h1>
        <p className="text-[#8b98a5] text-xl text-center xs:w-[80%] lg:w-[60%]">
          Discover our Front-End and Back-End tools that we use.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-4 xs:w-full xsl:w-[90%] m-auto my-20 z-10">
        <div
          className="md:animate-[fadeInLeft_0.5s_ease-in-out] md:opacity-0 bg-[#ffffff0d] backdrop-blur rounded-[3rem] xs:row-span-2 sm:row-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 p-10 flex flex-col items-start justify-between relative overflow-hidden"
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col justify-start items-start">
            <h2 className="font-bold text-2xl text-[#5860CF]">Front-End</h2>
            <p className="text-[#8b98a5] font-bold text-5xl">Modern looking</p>
            <p className="text-slate-500 text-md py-5 z-10">
              We use tons of Front-End tools to create the most customer
              specific websites. And we are happy to learn a new technology, if
              it is not among our tools.
            </p>
          </div>
          <div className="flex flex-row justify-center items-end w-full">
            <img
              src={frontend}
              loading="lazy"
              width={450}
              height={300}
              alt="Front-End headline"
            />
          </div>
        </div>
        <div
          className="md:animate-[fadeInTop_0.5s_ease-in-out] md:opacity-0 bg-[#ffffff0d] backdrop-blur rounded-[3rem] p-10 flex flex-col items-center justify-between"
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <p className="font-bold text-3xl text-[#8b98a5] text-center">
            Unique
          </p>
          <img
            src={unique}
            loading="lazy"
            width={150}
            height={150}
            alt="Unique headline"
          />
        </div>
        <div
          className="md:animate-[fadeInTop_0.5s_ease-in-out] md:opacity-0 bg-[#ffffff0d] backdrop-blur rounded-[3rem] md:col-span-1 lg:col-span-1 p-10 flex flex-col items-center justify-between"
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <p className="font-bold text-3xl text-[#8b98a5] text-center">
            Smooth
          </p>
          <img
            src={smooth}
            loading="lazy"
            width={150}
            height={150}
            alt="Smooth headline"
          />
        </div>
        <div
          className="md:animate-[fadeInRight_0.5s_ease-in-out] md:opacity-0 bg-[#ffffff0d] backdrop-blur rounded-[3rem] sm:col-span-2 md:col-span-3 lg:col-span-2 p-10 flex flex-col items-center justify-between"
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <p className="font-bold text-3xl text-[#8b98a5] text-center">Fast</p>
          <img
            src={fire}
            loading="lazy"
            width={150}
            height={150}
            alt="Fire headline"
          />
        </div>
        <div className="bg-[#ffffff0d] backdrop-blur rounded-[3rem] p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#8b98a5] text-center">
            Optimized
          </p>
          <img
            src={optimized}
            loading="lazy"
            width={150}
            height={150}
            alt="Optimized headline"
          />
        </div>
        <div className="bg-[#ffffff0d] backdrop-blur rounded-[3rem] md:col-span-2 lg:col-span-3 xl:col-span-1 p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#8b98a5] text-center">
            User-Friendly
          </p>
          <img
            src={userFriendly}
            loading="lazy"
            width={150}
            height={150}
            alt="User-Friendly headline"
          />
        </div>
        <div className="bg-[#ffffff0d] backdrop-blur rounded-[3rem] xs:row-span-2 sm:row-span-2 sm:col-span-2 p-10 flex flex-col items-start justify-between overflow-hidden relative">
          <div className="flex flex-col justify-start items-start">
            <h2 className="font-bold text-2xl text-[#5860CF]">Back-End</h2>
            <p className="text-[#8b98a5] font-bold text-5xl">Safe</p>
            <p className="text-slate-500 text-md py-5 z-10">
              Our main goal is to keep Back-End secure. We use multiple Back-End
              languages and frameworks to satisfy the customer's needs.
            </p>
          </div>
          <div className="flex flex-row justify-center items-end w-full">
            <img
              src={backend}
              loading="lazy"
              width={450}
              height={300}
              alt="Back-End headline"
            />
          </div>
        </div>
        <div className="bg-[#ffffff0d] backdrop-blur rounded-[3rem] p-10 lg:col-span-2 xl:col-span-1 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#8b98a5] text-center">
            Secure
          </p>
          <img
            src={secure}
            loading="lazy"
            width={150}
            height={150}
            alt="Secure headline"
          />
        </div>
        <div className="bg-[#ffffff0d] backdrop-blur rounded-[3rem] md:col-span-1 lg:col-span-2 xl:col-span-1 p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#8b98a5] text-center">
            High-Performance
          </p>
          <img
            src={highPerformance}
            loading="lazy"
            width={150}
            height={150}
            alt="High-Performance headline"
          />
        </div>
      </div>
      <img
        src={bgImage}
        alt="BG"
        loading="lazy"
        className="bg fixed top-0 right-0 bottom-0 h-full w-full object-cover object-center overflow-clip opacity-60 z-0"
        sizes="calc(50vw - 40px)"
        decoding="async"
      />
    </section>
  );
}

export default Skills;
