import {
  faAndroid,
  faApple,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import appHeadline from "../assets/images/app-headline-image.png";
import diveDeeper from "../assets/images/dive-deeper.png";
import circles from "../assets/images/hero-bg.png";
import ApplicationTitle from "../components/ApplicationTitle";

function Application() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={appHeadline}
            loading="lazy"
            alt="Mobile application headline"
            className="xs:animate-[scaleDownMobile_2s_ease-in-out] md:animate-[scaleDown_2s_ease-in-out] opacity-0 w-[70px] h-[70px] drop-shadow-lg transition-all"
            style={{
              animationDuration: "1.8s",
              animationFillMode: "forwards",
            }}
          />
        </div>
        <ApplicationTitle />
        <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-[#1d1d1f] text-center xs:w-[90%] md:w-[70%]">
          Everything you need. Nothing you don't.
        </h1>
        <p className="font-bold text-[#8b98a5] text-center xs:w-[80%] lg:w-[35%]">
          Unleash the power of mobile application development.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-3 mt-24">
        <div className="flex flex-row justify-center items-center xs:w-full md:w-3/4">
          <img
            src={diveDeeper}
            loading="lazy"
            width={50}
            height={50}
            alt="Dive deeper"
          />
          <h1 className="font-bold xs:text-4xl md:text-5xl text-[#1d1d1f] text-center">
            Dive Deeper.
          </h1>
        </div>
        <p className="font-bold text-[#8b98a5] text-center xs:w-[80%] lg:w-[35%]">
          Let's learn more about our mobile application development.
        </p>
        <div className="flex flex-row justify-center items-flex-start xs:flex-col xs:justify-start lg:justify-center lg:items-center lg:flex-row w-3/4 xs:min-h-[600px] lg:min-h-[550px]">
          <div className="flex flex-col justify-center items-start xs:items-center lg:items-start xs:w-full lg:w-1/2 lg:p-4 gap-3 relative">
            <img
              src={circles}
              loading="lazy"
              alt="Blured circles"
              className="absolute top-[50%] left-[30%] transfrom -translate-y-[50%] -translate-x-[50%] z-0 xs:hidden md:block"
            />
            <h1 className="text-[#1d1d1f] font-extrabold xs:text-3xl md:text-4xl xs:text-center lg:text-left z-10">
              Dream it. We'll make it come true.
            </h1>
            <p className="text-[#1d1d1f] font-normal text-base xs:text-center lg:text-left z-10">
              We are developing mobile applications on both <b>iOS</b> and{" "}
              <b>Android</b> platforms. We mainly use <b>React Native</b>.
            </p>
            <div className="flex flex-row justify-start items-center gap-3 my-3 z-10">
              <div className="platform flex flex-row justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl">
                <FontAwesomeIcon
                  icon={faAndroid}
                  size="2xl"
                  className="text-[#0d2247] group-hover:text-white transition-all"
                />
              </div>
              <hr className="h-8 w-px bg-slate-500/20" />
              <div className="platform flex flex-row justify-center items-center px-3.5 py-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl">
                <FontAwesomeIcon
                  icon={faApple}
                  size="2xl"
                  className="text-[#0d2247] group-hover:text-white transition-all"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center xs:w-full xs:h-[300px] lg:w-1/2 p-5 relative">
            <div
              className="animate-[expandOpacity_6s_ease-in-out_infinite] opacity-0 w-[230px] h-[230px] rounded-full border-[px] border-[#0077881a] bg-gradient-to-br from-[#0077881a] from-[20%] to-white to-[100%] absolute -translate-y-1/2 -translate-x-1/2"
              style={{
                animationDelay: "3s",
                animationPlayState: "running",
              }}
            ></div>
            <div
              className="animate-[expandOpacity_6s_ease-in-out_infinite] opacity-0 w-[150px] h-[150px] rounded-full border-[px] border-[#0077881a] bg-gradient-to-br from-[#0077881a] from-[20%] to-white to-[100%] absolute -translate-y-1/2 -translate-x-1/2"
              style={{
                animationDelay: "2s",
                animationPlayState: "running",
              }}
            ></div>
            <div
              className="flex flex-row justify-center items-center animate-[expand_6s_ease-in-out_infinite] w-[100px] h-[100px] rounded-full border-[px] border-[#0077881a] bg-gradient-to-br from-[#0077881a] from-[40%] to-white to-[100%] absolute -translate-y-1/2 -translate-x-1/2"
              style={{
                animationDelay: "1s",
                animationPlayState: "running",
              }}
            >
              <FontAwesomeIcon
                icon={faReact}
                size="2xl"
                className="w-14 h-14 text-[#007788]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;

{
  /* <div className="app-development flex flex-col justify-start items-center xs:w-full md:w-3/4 xs:min-h-[500px] xsm:min-h-[550px] sm:min-h-[650px] xs:rounded-none md:rounded-[3rem] mt-8 p-10">
          <div className="flex flex-col justify-center items-center xs:w-full sm:w-[60%] md:w-[80%] lg:w-1/2 gap-2">
            <h1 className="text-white font-extrabold xs:text-3xl md:text-5xl text-center">
              Dream it. We'll make it come true.
            </h1>
            <p className="text-white font-normal text-base text-center">
              We are developing mobile applications on both <b>iOS</b> and{" "}
              <b>Android</b> platforms. We mainly use <b>React Native</b>.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center h-[400px] w-full relative">
            <div
              className="animate-[expandOpacity_6s_ease-in-out_infinite] opacity-0 w-[230px] h-[230px] rounded-full border-1 border-white/10 bg-transparent absolute -translate-y-1/2 -translate-x-1/2"
              style={{
                animationDelay: "3s",
                animationPlayState: "running",
              }}
            ></div>
            <div
              className="platform animate-[expandOpacity_6s_ease-in-out_infinite] opacity-0 w-[150px] h-[150px] rounded-full border-1 border-white/10 bg-transparent absolute -translate-y-1/2 -translate-x-1/2"
              style={{
                animationDelay: "2s",
                animationPlayState: "running",
              }}
            ></div>
            <div
              className="ring flex flex-row justify-center items-center animate-[expand_6s_ease-in-out_infinite] w-[100px] h-[100px] rounded-full border-1 border-[#e5e7eb] absolute -translate-y-1/2 -translate-x-1/2"
              style={{
                animationDelay: "1s",
                animationPlayState: "running",
              }}
            >
              <img
                src={logo}
                alt="RAN Webdesign"
                loading="lazy"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div> */
}
