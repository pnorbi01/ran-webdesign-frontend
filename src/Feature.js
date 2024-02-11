import {
  faBrain,
  faLocationCrosshairs,
  faMicrophoneAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Feature() {
  return (
    <section className="flex w-full flex-row justify-center items-center my-24">
      <div className="flex flex-col justify-center items-center gap-2 w-full z-10">
        <div className="flex flex-col justify-center items-center gap-2 p-5 xs:w-full sm:w-[80%] md:w-[80%] lg:w-3/4 relative">
          <div className="before:content-['1'] absolute py-2 px-4 -top-8 text-white rounded-full font-bold bg-[#2D7CFC]"></div>
          <div className="before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-gradient-to-b from-[#fafafc] to-[#2D7CFC]"></div>
          <h3 className="font-extrabold text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2D7CFC] to-[#71B9F5]">
            Build faster
          </h3>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[rgba(0,0,0,.7)] to-black font-extrabold text-3xl text-center">
            Why should you choose us?
          </h1>
          <span className="text-[#8b98a5] font-normal text-base text-center xs:w-full sm:w-[80%] md:w-[80%] lg:w-[60%]">
            We'll list a few key principles to explain why it's worth entrusting
            your future project to us. Our team has a proven track record of
            delivering successful projects on time and within budget, and we are
            committed to providing top-notch expertise and personalized service
            to ensure your project's success.
          </span>
        </div>
        <div className="flex flex-row justify-center items-flex-start gap-4 w-full flex-wrap mb-24">
          <div className="platform group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#0d224708] border-1 border-[#e5e7eb] hover:cursor-pointer transition-all">
            <div className="icon-inner flex flex-row justify-center items-center rounded-2xl w-11 h-11 bg-primary/10 group-hover:bg-[#3B82F6] transition-all">
              <FontAwesomeIcon
                icon={faShieldAlt}
                size="2xl"
                className="text-[#3B82F6] group-hover:text-white transition-all"
              />
            </div>
            <h3 className="uppercase font-bold text-base text-center text-[#2D7CFC]">
              Security
            </h3>
            <span className="text-[#8b98a5] text-base text-center">
              As a web development company, we prioritize safety and security.
              Our commitment to excellence extends to ensuring the safety of
              your data and online presence.
            </span>
          </div>
          <div className="platform group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#0d224708] border-1 border-[#e5e7eb] hover:cursor-pointer transition-all">
            <div className="icon-inner flex flex-row justify-center items-center rounded-2xl w-11 h-11 bg-primary/10 group-hover:bg-[#3B82F6] transition-all">
              <FontAwesomeIcon
                icon={faMicrophoneAlt}
                size="2xl"
                className="text-[#3B82F6] group-hover:text-white transition-all"
              />
            </div>
            <h3 className="uppercase font-bold text-base text-center text-[#2D7CFC]">
              Easy communication
            </h3>
            <span className="text-[#8b98a5] text-base text-center">
              Open lines of communication at every step! We appreciate a smooth
              operation. That's why we always pay special attention to our
              clients' needs and feedback.
            </span>
          </div>
          <div className="platform group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#0d224708] border-1 border-[#e5e7eb] hover:cursor-pointer transition-all">
            <div className="icon-inner flex flex-row justify-center items-center rounded-2xl w-11 h-11 bg-primary/10 group-hover:bg-[#3B82F6] transition-all">
              <FontAwesomeIcon
                icon={faLocationCrosshairs}
                size="2xl"
                className="text-[#3B82F6] group-hover:text-white transition-all"
              />
            </div>
            <h3 className="uppercase font-bold text-base text-center text-[#2D7CFC]">
              Precision
            </h3>
            <span className="text-[#8b98a5] text-base text-center">
              We appreciate craftsmanship and consistently strive to achieve it.
              We pay meticulous attention to even the smallest details.
            </span>
          </div>
          <div className="platform group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#0d224708] border-1 border-[#e5e7eb] hover:cursor-pointer z-10 transition-all">
            <div className="flex flex-row justify-center items-center rounded-2xl w-11 h-11 bg-primary/10 group-hover:bg-[#3B82F6] transition-all">
              <FontAwesomeIcon
                icon={faBrain}
                size="2xl"
                className="text-[#3B82F6] group-hover:text-white transition-all"
              />
            </div>
            <h3 className="uppercase font-bold text-base text-center text-[#2D7CFC]">
              Modern technologies
            </h3>
            <span className="text-[#8b98a5] text-base text-center">
              We are passionate about new technologies and continually keep pace
              in this ever-evolving industry.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
