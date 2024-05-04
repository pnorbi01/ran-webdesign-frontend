import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center h-8 xs:w-[80%] md:w-[50%] overflow-hidden relative">
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0"
        style={{
          animationDelay: "1.7s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-zinc-400" />
        <p className="font-bold text-2xl text-zinc-400">Modern</p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0"
        style={{
          animationDelay: "2.7s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-zinc-400" />
        <p className="font-bold text-2xl text-zinc-400">Secure</p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0"
        style={{
          animationDelay: "3.7s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-zinc-400" />
        <p className="font-bold text-2xl text-zinc-400">User-Friendly</p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in] opacity-0 absolute top-0"
        style={{
          animationDelay: "4.7s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-zinc-400" />
        <p className="font-bold text-2xl text-zinc-400">Precise</p>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndStay_1s_ease-in] opacity-0 absolute top-0"
        style={{
          animationDelay: "5.7s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <HiBadgeCheck className="h-8 w-8 text-zinc-400" />
        <p className="font-bold text-2xl text-zinc-400">RAN</p>
      </div>
    </div>
  );
}

export default HeroTitle;
