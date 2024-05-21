import React from "react";
import {
  ReactIcon,
  JavaIcon,
  PhpIcon,
  ExpoIcon,
  TailwindIcon,
} from "../assets/icons/Icons";
import technologies from "../assets/images/technologies.png";
import ran from "../assets/images/tech-logo.png";
import wave1 from "../assets/images/wave1.png";
import wave2 from "../assets/images/wave2.png";
import wave3 from "../assets/images/wave3.png";

function Technologies() {
  return (
    <section className="flex flex-col justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] space-y-10 z-10 py-5 relative">
        <div className="flex flex-col justify-center items-center xs:W-full 2xl:w-1/2 space-y-5">
          <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
            <span className="font-medium text-md text-center text-white">
              Technologies
            </span>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            Discover some of the technologies we employ to bring your dream
            project to life.
          </span>
        </div>
        <div className="technologies-line-left absolute top-0 xl:left-0 2xl:left-[10%] w-[1px] h-[500px] xs:hidden xl:block"></div>
        <div className="technologies-line-right absolute top-0 xl:right-0 2xl:right-[10%] w-[1px] h-[500px] xs:hidden xl:block"></div>
      </div>
      <div className="grid grid-cols-2 auto-rows-[15rem] w-full xl:w-1/2 h-[30rem] relative m-auto overflow-clip pt-[13.5px] z-10">
        <div className="technologies-item flex flex-col xs:justify-end lg:justify-center xs:items-end lg:items-center xs:pr-10 xs:pb-10 lg:p-0 gap-3">
          <div className="p-1 xs:rounded-lg md:rounded-xl bg-[#58c4dc]">
            <ReactIcon size={20} color={"#FFF"} />
          </div>
          <span className="text-[#f4f0ff] text-center xs:hidden lg:block">
            React Native & ReactJS
          </span>
          <span className="text-[#efedfdb3] text-center text-sm xs:hidden lg:block lg:w-1/2">
            Creating your dream on both iOS and Android platform.
          </span>
        </div>
        <div className="technologies-item flex flex-col xs:justify-end lg:justify-center xs:items-start lg:items-center xs:pl-10 xs:pb-10 lg:p-0 gap-3">
          <div className="p-1 xs:rounded-lg md:rounded-xl bg-black">
            <ExpoIcon size={30} color={"#FFF"} />
          </div>
          <span className="text-[#f4f0ff] text-center xs:hidden lg:block">
            Expo
          </span>
          <span className="text-[#efedfdb3] text-center text-sm xs:hidden lg:block lg:w-1/2">
            To deploy your application faster than ever.
          </span>
        </div>
        <div className="technologies-item flex flex-col xs:justify-start lg:justify-center xs:items-end lg:items-center xs:pr-10 xs:pt-[4.3rem] lg:p-0 gap-3">
          <div className="flex flex-row justify-center items-center px-5 py-1 gap-3 xs:rounded-lg md:rounded-xl bg-[#ffffff0d] border border-[#363541]">
            <JavaIcon size={20} color={"#efedfdb3"} />
            <div className="h-5 w-[1px] bg-[#ffffff0d]"></div>
            <PhpIcon size={20} color={"#efedfdb3"} />
          </div>
          <span className="text-[#f4f0ff] text-center xs:hidden lg:block">
            Java & PHP
          </span>
          <span className="text-[#efedfdb3] text-center text-sm xs:hidden lg:block lg:w-1/2">
            To make your project more secure than ever.
          </span>
        </div>
        <div className="technologies-item flex flex-col xs:justify-start lg:justify-center xs:items-start lg:items-center xs:pl-10 xs:pt-[4.3rem] lg:p-0 gap-3">
          <div className="flex flex-row justify-center items-center px-5 py-1 gap-3 xs:rounded-lg md:rounded-xl bg-[#ffffff0d] border border-[#363541]">
            <TailwindIcon size={20} color={"#efedfdb3"} />
            <div className="h-5 w-[1px] bg-[#ffffff0d]"></div>
            <div>
              <span className="text-md text-[#efedfdb3]">UI</span>
            </div>
          </div>
          <span className="text-[#f4f0ff] text-center xs:hidden lg:block">
            TailwindCSS & NextUI
          </span>
          <span className="text-[#efedfdb3] text-center text-sm xs:hidden lg:block lg:w-1/2">
            For intuitive and User-Friendly UI experience.
          </span>
        </div>
        <div className="technologies-blur-bg w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
        <img
          src={technologies}
          alt="Technologies"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full object-cover"
        />
        <div>
          <div
            className="animate-[technologiesFirstLine_3.5s_infinite] opacity-0 h-[50px] w-[1px] absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-gradient-to-t from-[#c9b1ff00] via-[#c9b1ff] to-[#c9b1ff00]"
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
          <div
            className="animate-[technologiesSecondLine_3.5s_infinite] opacity-0 h-[50px] w-[1px] absolute top-1/2 left-1/2 bg-gradient-to-t from-[#c9b1ff00] via-[#c9b1ff] to-[#c9b1ff00]"
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
          <div
            className="animate-[technologiesThirdLine_3.5s_infinite] opacity-0 h-[1px] w-[50px] absolute top-[53%] left-1/2 bg-gradient-to-r from-[#c9b1ff00] via-[#c9b1ff] to-[#c9b1ff00]"
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
          <div
            className="animate-[technologiesFourthLine_3.5s_infinite] opacity-0 h-[1px] w-[50px] absolute top-[53%] right-1/2 bg-gradient-to-r from-[#c9b1ff00] via-[#c9b1ff] to-[#c9b1ff00]"
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
        </div>
        <div>
          <img
            src={ran}
            alt="RAN Webdesign logo"
            loading="lazy"
            width={50}
            height={50}
            className="absolute top-[53%] left-[49.9%] transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
          <img
            src={wave1}
            alt="Wave first"
            loading="lazy"
            width={50}
            height={50}
            className="animate-[firstWave_3.5s_ease-in-out_infinite] absolute top-[53%] left-[49.9%] transform -translate-x-1/2 -translate-y-1/2 z-10 h-[48px] w-[48px]"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          />
          <img
            src={wave2}
            alt="Wave second"
            loading="lazy"
            width={50}
            height={50}
            className="animate-[secondWave_3.5s_ease-in-out_infinite] absolute top-[53%] left-[49.9%] transform -translate-x-1/2 -translate-y-1/2 z-10 h-[40px] w-[40px]"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          />
          <img
            src={wave3}
            alt="Wave third"
            loading="lazy"
            width={50}
            height={50}
            className="animate-[thirdWave_3.5s_ease-in-out_infinite] absolute top-[53%] left-[49.9%] transform -translate-x-1/2 -translate-y-1/2 z-10 h-[32px] w-[32px]"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[90%] space-y-5 xs:block lg:hidden z-20">
        <div className="flex flex-row justify-start items-start gap-2 w-full">
          <div className="p-1 rounded-lg bg-[#58c4dc]">
            <ReactIcon size={20} color={"#FFF"} />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-[#f4f0ff] xs:text-sm md:text-lg font-semibold">
              React Native & ReactJS
            </span>
            <span className="text-[#efedfdb3] text-left xs:text-sm md:text-lg">
              Creating your dream on both iOS and Android platform.
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-2 w-full">
          <div className="p-1 rounded-lg bg-black">
            <ExpoIcon size={30} color={"#FFF"} />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-[#f4f0ff] text-sm xs:text-sm md:text-lg font-semibold">
              Expo
            </span>
            <span className="text-[#efedfdb3] text-left xs:text-sm md:text-lg">
              To deploy your application faster than ever.
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-2 w-full">
          <div className="flex flex-col justify-center items-center p-1 gap-1 rounded-lg bg-[#ffffff0d] border border-[#363541]">
            <JavaIcon size={20} color={"#efedfdb3"} />
            <div className="h-[1px] w-5 bg-[#ffffff0d]"></div>
            <PhpIcon size={20} color={"#efedfdb3"} />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-[#f4f0ff] xs:text-sm md:text-lg font-semibold">
              Java & PHP
            </span>
            <span className="text-[#efedfdb3] text-left xs:text-sm md:text-lg">
              To make your project more secure than ever.
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-2 w-full">
          <div className="flex flex-col justify-center items-center p-1 gap-1 rounded-lg bg-[#ffffff0d] border border-[#363541]">
            <TailwindIcon size={20} color={"#efedfdb3"} />
            <div className="h-[1px] w-5 bg-[#ffffff0d]"></div>
            <div>
              <span className="text-md text-[#efedfdb3]">UI</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-[#f4f0ff] xs:text-sm md:text-lg font-semibold">
              TailwindCSS & NextUI
            </span>
            <span className="text-[#efedfdb3] text-left xs:text-sm md:text-lg">
              For intuitive and User-Friendly UI experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
