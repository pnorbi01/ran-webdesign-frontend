import {
  faBrain,
  faLocationCrosshairs,
  faMicrophoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import easyComms from "./images/easy-comms.png";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[80%] gap-5">
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-[#0d2247] uppercase font-bold text-left tracking-widest">
            Build faster
          </h3>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[rgba(0,0,0,.7)] to-black font-extrabold text-3xl text-left">
            See your project like never before.
          </h1>
        </div>
        <p className="text-[#3d4e6c] xs:w-full md:w-[50%]">
          We are committed to providing top-notch expertise and personalized
          service to ensure your project's success.
        </p>
      </div>
      <div className="flex flex-row justify-center items-flex-start gap-4 w-[80%] flex-wrap bg-blue-100 my-10">
        <div className="group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 lg:h-[24rem] gap-2 rounded-3xl bg-[#fafafc] hover:shadow-md hover:cursor-pointer transition-all">
          <div className="flex flex-row justify-center items-center h-1/2 w-full">
            <img src={easyComms} alt="Easy communication" />
          </div>
        </div>
        <div className="group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#fafafc] hover:shadow-md hover:cursor-pointer transition-all">
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
        <div className="group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#fafafc] hover:shadow-md hover:cursor-pointer transition-all">
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
        <div className="group flex flex-col justify-flex-start items-center p-5 xs:w-[90%] sm:w-[40%] lg:w-1/4 gap-2 rounded-3xl bg-[#fafafc] hover:shadow-md hover:cursor-pointer z-10 transition-all">
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
    </section>
  );
}

export default Contact;

{
  /* <div className="icon-inner flex flex-row justify-center items-center rounded-2xl w-11 h-11 bg-primary/10 group-hover:bg-[#3B82F6] transition-all">
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
            As a web development company, we prioritize safety and security. Our
            commitment to excellence extends to ensuring the safety of your data
            and online presence.
          </span> */
}
