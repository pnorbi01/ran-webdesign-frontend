import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Application() {
  return (
    <section className="flex flex-col justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center gap-2 p-5 xs:w-[90%] md:w-1/2 relative z-10">
        <div className="before:content-['2'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold bg-[#2D7CFC]"></div>
        <div className="before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-gradient-to-b from-[#f8fbff] to-[#2D7CFC]"></div>
        <h3 className="font-extrabold text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2D7CFC] to-[#71B9F5]">
          Mobile application
        </h3>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[rgba(0,0,0,.7)] to-black font-extrabold text-3xl text-center">
          Everything you need. Nothing you don’t.
        </h1>
        <span className="text-[#8b98a5] font-normal text-base text-center sm:w-[80%] md:w-[75%] lg:w-[80%]">
          Partner with us to design and develop your custom mobile app in{" "}
          <span className="text-[#2D7CFC] font-bold">React Native</span>. Let's
          turn your vision into a reality!
        </span>
        <div className="flex flex-row justify-start items-center gap-3 my-3 z-10">
          <div className="platform flex flex-row justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl">
            <FontAwesomeIcon
              icon={faAndroid}
              size="2xl"
              className="text-[#0d2247] group-hover:text-white transition-all"
            />
          </div>
          <hr className="h-8 w-px bg-[#e5e7eb]" />
          <div className="platform flex flex-row justify-center items-center px-3.5 py-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl">
            <FontAwesomeIcon
              icon={faApple}
              size="2xl"
              className="text-[#0d2247] group-hover:text-white transition-all"
            />
          </div>
        </div>
        <Link
          href="/mobile"
          className="group flex flex-row justify-center items-center gap-2 hover:cursor-pointer mb-24"
        >
          <span className="text-[#2D7CFC] font-bold">Learn more</span>
          <HiArrowNarrowRight className="text-[#2D7CFC] group-hover:translate-x-[3px] transition-all" />
        </Link>
      </div>
    </section>
  );
}

export default Application;
