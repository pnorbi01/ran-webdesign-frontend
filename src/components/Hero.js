import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroTitle from "./HeroTitle";

function Hero() {
  return (
    <section className="hero flex flex-row justify-center xs:items-center md:items-start h-screen">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-2/3 gap-3 xs:mt-0 md:mt-32">
        <HeroTitle />
        <h1
          className="animate-[fadeInBottom_0.5s_ease-in-out] opacity-0 xs:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[rgba(0,0,0,.7)] to-black text-center pb-1"
          style={{
            animationDelay: "0.80s",
            animationFillMode: "forwards",
          }}
        >
          Build your project with us.
        </h1>
        <p
          className="animate-[fadeInBottom_0.5s_ease-in-out] opacity-0 text-xl text-[#8b98a5] text-center"
          style={{
            animationDelay: "1s",
            animationFillMode: "forwards",
          }}
        >
          Unlock the power of swift and collaborative web development.
        </p>
        <div
          className="group animate-[fadeInBottom_0.5s_ease-in-out] opacity-0 flex flex-row justify-center items-center gap-3 rounded-full py-2 px-5 border-1 border-[#bababa] bg-[#0d2247] backdrop-blur-[10px] hover:cursor-pointer transition-all"
          style={{
            animationDelay: "1.20s",
            animationFillMode: "forwards",
          }}
        >
          <span className="font-bold text-white">Let's talk</span>
          <HiArrowNarrowRight className="text-white group-hover:translate-x-[3px] transition-all" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
