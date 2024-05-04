import React from "react";
import appHeadline from "../assets/images/app-headline-image.png";
import ApplicationTitle from "../components/ApplicationTitle";
import bgImage from "../assets/images/bgImage.webp";
import {
  FireIcon,
  DollarIcon,
  RocketIcon,
  CodeIcon,
  MobileIcon,
  ScaleIcon,
  ChartIcon,
  UserGearIcon,
  UserArrowIcon,
  BulbIcon,
  UsersIcon,
  UpdateIcon,
} from "../assets/icons/Icons";
import iosAppCardImg from "../assets/images/ios-app-card-img.png";

function Application() {
  return (
    <section className="flex flex-col justify-center items-center w-full relative">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] mt-20 z-10 space-y-20">
        <div className="flex flex-col justify-center items-center gap-5">
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
          <ApplicationTitle />
          <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-white text-center xs:w-[90%] md:w-[70%]">
            Everything you need. Nothing you don't*
          </h1>
          <p className="text-[#8b98a5] text-xl text-center xs:w-[80%] lg:w-[35%]">
            Unleash the power of mobile application development.
          </p>
        </div>
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap mt-10 xs:w-full 2xl:w-2/3 gap-5">
          <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full xl:w-1/2 2xl:w-1/3">
            <RocketIcon size={40} color={"#004C72"} />
            <span className="text-[#c1bfc7] font-semibold text-lg">
              The mobile app catapults your business into the modern era with
              cutting-edge solutions and technologies.
            </span>
          </div>
          <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full xl:w-1/2 2xl:w-1/3">
            <CodeIcon size={40} color={"#004C72"} />
            <span className="text-[#c1bfc7] font-semibold text-lg">
              If you're struggling to find the perfect software fit and require
              a custom system that can seamlessly handle a high volume of users,
              you're in the right spot
            </span>
          </div>
          <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full xl:w-1/2 2xl:w-1/3">
            <DollarIcon size={40} color={"#004C72"} />
            <span className="text-[#c1bfc7] font-semibold text-lg">
              Is your competitor already utilizing a mobile app to cut costs or
              enhance user experience? Reach out to us, and we'll assist you in
              achieving the same!
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center xs:w-full space-y-10">
          <div className="flex flex-col justify-center items-center gap-5 xs:w-full xl:w-1/2">
            <div className="bg-[#ffffff0d] text-white rounded-full border border-[#363541] px-2">
              <span className="font-bold text-md text-center text-neutral-500">
                Dive Deeper
              </span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Dream it. We'll make it come true
            </span>
          </div>
          <div className="flex flex-col justify-center items-flex-start mt-10 xs:w-full 2xl:w-2/3">
            <div className="flex flex-row justify-between items-start xs:flex-wrap md:flex-nowrap xs:gap-0 md:gap-5 bg-[#ffffff0d] backdrop-blur rounded-t-2xl w-full">
              <div className="flex flex-col justify-start items-start xs:w-full md:w-1/3 gap-3 p-5 ">
                <MobileIcon size={40} color={"#004C72"} />
                <span className="text-[#c1bfc7] font-semibold text-lg">
                  Android and iOS mobile app development
                </span>
              </div>
              <div className="flex flex-col justify-start items-start xs:w-full md:w-1/3 gap-3 xs:px-5 md:p-5 ">
                <ScaleIcon size={40} color={"#004C72"} />
                <span className="text-[#c1bfc7] font-semibold text-lg">
                  Scalable solutions
                </span>
              </div>
              <div className="flex flex-col justify-start items-start xs:w-full md:w-1/3 gap-3 p-5 ">
                <FireIcon size={40} color={"#004C72"} />
                <span className="text-[#c1bfc7] font-semibold text-lg">
                  Outpaced by the competition? We can help you catch up!
                </span>
              </div>
            </div>
            <div className="w-full rounded-b-2xl">
              <img
                src={iosAppCardImg}
                alt="iOS app"
                loading="lazy"
                className="rounded-b-2xl w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center xs:w-full space-y-10">
          <div className="flex flex-col justify-center items-center gap-5 xs:w-full xl:w-1/2">
            <div className="bg-[#ffffff0d] text-white rounded-full border border-[#363541] px-2">
              <span className="font-bold text-md text-center text-neutral-500">
                Solutions
              </span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Meet the solutions that we offer
            </span>
          </div>
          <div className="flex flex-row justify-center items-flex-start xs:flex-wrap xl:flex-nowrap w-full gap-5">
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <UserArrowIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                Flexible technological capacity tailored to customer
                requirements
              </span>
            </div>
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <UserGearIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                Tailored process customized to your needs
              </span>
            </div>
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <MobileIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                Responsive UX/UI
              </span>
            </div>
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <ChartIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                IT + Business Approach
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center xs:w-full space-y-10">
          <div className="flex flex-col justify-center items-center gap-5 xs:w-full xl:w-1/2">
            <div className="bg-[#ffffff0d] text-white rounded-full border border-[#363541] px-2">
              <span className="font-bold text-md text-center text-neutral-500">
                Problems
              </span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Common problems our customers come to us in case of mobile app
              development
            </span>
          </div>
          <div className="flex flex-row justify-center items-flex-start xs:flex-wrap xl:flex-nowrap w-full gap-5">
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <MobileIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                I require a superior mobile app; the current one doesn't meet my
                business requirements.
              </span>
            </div>
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <BulbIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                I have a clear idea and need a development team to bring it to
                life.
              </span>
            </div>
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <UsersIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                I'm considering hiring external developers for a project.
              </span>
            </div>
            <div className="bg-line flex flex-col justify-start items-center p-4 gap-3 rounded-xl bg-[#ffffff0d] backdrop-blur xs:w-full md:w-1/3 xl:w-1/5">
              <UpdateIcon size={35} color={"#004C72"} />
              <span className="text-[#c1bfc7] font-semibold text-md text-center">
                I'm looking to enhance my current mobile app.
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bgImage}
        alt="BG"
        loading="lazy"
        className="bg fixed top-0 right-0 bottom-0 h-full w-full object-cover object-center overflow-clip opacity-60 z-0"
        sizes="calc(50vw - 40px)"
        decoding="async"
      />
    </section>
  );
}

export default Application;
