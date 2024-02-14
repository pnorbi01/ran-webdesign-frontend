import {
  faAngular,
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import fire from "../assets/images/fire.svg";
import modern from "../assets/images/modern.svg";
import secure from "../assets/images/secure.svg";
import skillHeadline from "../assets/images/skill-headline-image.png";
import smooth from "../assets/images/smooth.svg";
import unique from "../assets/images/unique.svg";
import userFriendly from "../assets/images/user-friendly.svg";

function Skills() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={skillHeadline}
            loading="lazy"
            alt="Skills headline"
            className="xs:animate-[scaleDownMobile_2s_ease-in-out] md:animate-[scaleDown_2s_ease-in-out] opacity-0 w-[70px] h-[70px] drop-shadow-lg transition-all"
            style={{
              animationDuration: "1.8s",
              animationFillMode: "forwards",
            }}
          />
          <h3
            className="animate-[fadeInTop_0.5s_ease-in-out] opacity-0 font-bold text-lg text-[#1d1d1f] text-center"
            style={{ animationDelay: "2s", animationFillMode: "forwards" }}
          >
            Skills
          </h3>
        </div>
        <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-[#1d1d1f] text-center">
          Meet our knowledge.
        </h1>
        <p className="font-bold text-[#8b98a5] text-center xs:w-[90%] sm:w-1/2">
          Discover our Front-End and Back-End tools that we use.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-4 w-[90%] m-auto my-20">
        <div className="bg-[#F5F4FF] rounded-[3rem] xs:row-span-2 sm:row-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 p-10 flex flex-col items-start justify-between relative overflow-hidden">
          <div className="flex flex-col justify-start items-start">
            <h2 className="font-bold text-2xl text-[#7465D7]">Front-End</h2>
            <p className="headline-recommend text-[#1d1d1f] font-bold text-5xl">
              Modern looking
            </p>
            <p className="description-recommend text-slate-500 text-md py-5 z-10">
              We use tons of Front-End tools to create the most customer
              specific websites. And we are happy to learn a new technology, if
              it is not among our tools.
            </p>
          </div>
          <div className="flex flex-row justify-around items-end h-full w-full gap-5 xs:p-0 md:p-5">
            <div className="flex flex-col justify-start items-center gap-5 h-full">
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faReact}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faAngular}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faJs}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 h-full">
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faCss3}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-center h-full gap-5">
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faNpm}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex justify-center items-center p-3 xs:rounded-2xl lg:rounded-[1.6rem] bg-[#7465D7]">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2xl"
                  className="text-white xs:w-6 xs:h-6 lg:w-12 lg:h-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:animate-[fadeInLeft_0.5s_ease-in-out] md:opacity-0 bg-[#fafafc] rounded-[3rem] p-10 flex flex-col items-center justify-between"
          style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
        >
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">
            Unique
          </p>
          <img
            src={unique}
            loading="lazy"
            width={150}
            height={150}
            alt="Unique headline"
          />
        </div>
        <div
          className="md:animate-[fadeInLeft_0.5s_ease-in-out] md:opacity-0 bg-[#FCFAE8] rounded-[3rem] md:col-span-1 lg:col-span-1 p-10 flex flex-col items-center justify-between"
          style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
        >
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">
            Smooth
          </p>
          <img
            src={smooth}
            loading="lazy"
            width={150}
            height={150}
            alt="Smooth headline"
          />
        </div>
        <div
          className="md:animate-[fadeInRight_0.5s_ease-in-out] md:opacity-0 bg-[#FFF6F3] rounded-[3rem] sm:col-span-2 md:col-span-3 lg:col-span-2 p-10 flex flex-col items-center justify-between"
          style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
        >
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">Fast</p>
          <img
            src={fire}
            loading="lazy"
            width={150}
            height={150}
            alt="Fire headline"
          />
        </div>
        <div className="bg-[#FFF6F3] rounded-[3rem] p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">
            Precise
          </p>
        </div>
        <div className="bg-[#F5FCE8] rounded-[3rem] p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">
            User-Friendly
          </p>
          <img
            src={userFriendly}
            loading="lazy"
            width={150}
            height={150}
            alt="User-Friendly headline"
          />
        </div>
        <div className="bg-[#fafafc] rounded-[3rem] xs:row-span-2 sm:row-span-2 sm:col-span-2 p-10 flex flex-col items-start justify-start overflow-hidden relative">
          <h2 className="font-bold text-2xl text-[#50ab00]">
            Uputstvo za upotrebu
          </h2>
          <p className="headline-instruction text-[#1d1d1f] font-bold text-5xl">
            Lakše je tako.
          </p>
          <p className="description-instruction text-slate-500 text-xl py-5 z-10">
            Rolat izvaditi iz pakovanja, pokriti folijom za pečenje (ili
            alufolijom) i peći na temperaturi od +220ºC 40-50 minuta. Rolat ne
            treba dodatno začiniti.
          </p>
        </div>
        <div className="bg-[#FCFAE8] rounded-[3rem] p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">
            Secure
          </p>
          <img
            src={secure}
            loading="lazy"
            width={150}
            height={150}
            alt="Secure headline"
          />
        </div>
        <div className="bg-[#F5F4FF] rounded-[3rem] md:col-span-2 lg:col-span-1 p-10 flex flex-col items-center justify-between">
          <p className="font-bold text-3xl text-[#1d1d1f] text-center">
            Modern
          </p>
          <img
            src={modern}
            loading="lazy"
            width={150}
            height={150}
            alt="Modern headline"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
