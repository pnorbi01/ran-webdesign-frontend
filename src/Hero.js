import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroTitle from "./components/HeroTitle";

function Hero() {
  const scrollToContent = (div) => {
    const section = document.querySelector(`${div}`);
    if (section) {
      const yOffset =
        section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  const handleClickOnWeb = (scrollTo, event) => {
    scrollToContent(scrollTo);
    event.preventDefault();
  };

  return (
    <section className="flex flex-row justify-center items-center h-screen">
      <div
        className="animate-[fadeInBottom_0.5s_ease-in-out] opacity-0 flex flex-col justify-center items-center xs:w-[90%] md:w-2/3 gap-3"
        style={{
          animationDelay: "0.80s",
          animationFillMode: "forwards",
        }}
      >
        <HeroTitle />
        <h1 className="xs:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[rgba(0,0,0,.7)] to-black text-center pb-1">
          Build your project with us.
        </h1>
        <p className="hero-description text-xl text-[#8b98a5] text-center">
          Unlock the power of swift and collaborative web development.
        </p>
        <div className="group flex flex-row justify-center items-center gap-3 rounded-full py-2 px-5 border-1 border-[#bababa] bg-[#0d2247] backdrop-blur-[10px] hover:cursor-pointer transition-all">
          <span className="font-bold text-white">Let's talk</span>
          <HiArrowNarrowRight className="text-white group-hover:translate-x-[3px] transition-all" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
