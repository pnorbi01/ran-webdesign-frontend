import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center h-8 xs:w-[80%] md:w-[50%] overflow-hidden relative">
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0"
        style={{
          animationDelay: "1.5s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-[#2D7CFC]" />
        <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#2D7CFC] to-[#71B9F5]">
          Modern
        </p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0"
        style={{
          animationDelay: "2.5s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-[#FF3440]" />
        <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF3440] to-[#FF3A3D]">
          Secure
        </p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0"
        style={{
          animationDelay: "3.5s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-[#88DA11]" />
        <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#88DA11] to-[#C2F52B]">
          User-Friendly
        </p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in] opacity-0 absolute top-0"
        style={{
          animationDelay: "4.5s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-[#FF4500]" />
        <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF8A00]">
          Precise
        </p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndStay_1s_ease-in] opacity-0 absolute top-0"
        style={{
          animationDelay: "5.5s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-[#1d1d1f]" />
        <p className="font-bold text-2xl bg-clip-text text-[#1d1d1f]">RAN</p>
      </div>
    </div>
  );
}

export default HeroTitle;
