import React from "react";
import bgImage from "../assets/images/bgImage.webp";
import bgCircles from "../assets/images/bgCircles.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen relative">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] gap-5 z-10 relative overflow-visible">
        <span className="text-3xl text-white text-center">
          404 Not Found 😔
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-semibold text-center xs:text-2xl md:text-4xl">
          Ooops! The page you are searching for does not exist!
        </span>
        <Link
          to="/home"
          className="flex flex-row justify-center items-center gap-2 p-3 rounded-lg bg-[#5860CF] btn-shadow hover:cursor-pointer xs:w-full md:w-auto z-10"
        >
          <span className="font-normal text-md text-white">
            Go back to home
          </span>
        </Link>
        <span className="text-white/10 xs:text-9xl md:text-[12rem] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          404
        </span>
      </div>
      <img
        src={bgImage}
        alt="BG"
        loading="lazy"
        className="bg fixed top-0 right-0 bottom-0 h-full w-full object-cover object-center overflow-clip opacity-60 z-0"
        sizes="calc(50vw - 40px)"
        decoding="async"
      />
      <img
        src={bgCircles}
        alt="Bg circles"
        loading="lazy"
        className="absolute -top-6 -left-5 h-auto"
      />
    </section>
  );
}

export default NotFound;
