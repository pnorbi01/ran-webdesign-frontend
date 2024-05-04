import React from "react";
import { AndroidIcon, AppleIcon, ReactIcon } from "../assets/icons/Icons";

function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center xs:h-7 md:h-10 xs:w-[80%] md:w-full overflow-hidden relative">
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0 gap-2"
        style={{
          animationDelay: "2s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <AppleIcon size={20} color={"#8b98a5"} />
        <span className="font-medium text-md text-[#8b98a5] text-center">
          iOS
        </span>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-1 gap-2"
        style={{
          animationDelay: "3s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <AndroidIcon size={20} color={"#8b98a5"} />
        <span className="font-medium text-md text-[#8b98a5] text-center">
          Android
        </span>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndStay_1s_ease-in] opacity-0 absolute top-0 gap-2"
        style={{
          animationDelay: "4s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <ReactIcon size={20} color={"#8b98a5"} />
        <span className="font-medium text-md text-[#8b98a5] text-center">
          React Native
        </span>
      </div>
    </div>
  );
}

export default HeroTitle;
