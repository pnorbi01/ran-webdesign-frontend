import React from "react";
import iosAppCardImg from "../assets/images/ios-app-card-img.png";
import androidAppCardImg from "../assets/images/android-app-card-img.png";
import { AndroidIcon, AppleIcon, MobileIcon } from "../assets/icons/Icons";
import { Link } from "react-router-dom";

function Application() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] z-10 space-y-10">
        <div className="flex flex-col justify-center items-center xs:W-full lg:w-1/2 2xl:w-1/3 space-y-5">
          <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
            <span className="font-medium text-md text-center text-white">
              Mobile Application
            </span>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            Everything you need, nothing you don't.
          </span>
        </div>
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap w-full gap-5">
          <div className="flex flex-col justify-start items-start rounded-2xl bg-[#ffffff0d] gap-5 backdrop-blur xs:w-full xl:w-1/2 2xl:w-1/3">
            <div className="flex flex-row justify-start items-center gap-2 pt-5 px-5">
              <AndroidIcon size={25} />
              <span className="text-white font-semibold text-2xl">
                Android app
              </span>
            </div>
            <span className="text-[#c1bfc7] px-5">
              Specializing in Android app development, we harness the power of
              the platform to create innovative mobile solutions.
            </span>
            <div className="w-full rounded-b-2xl">
              <img
                src={androidAppCardImg}
                alt="Android app"
                loading="lazy"
                className="rounded-b-2xl w-full object-fit"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start rounded-2xl bg-[#ffffff0d] gap-5 backdrop-blur xs:w-full xl:w-1/2 2xl:w-1/3">
            <div className="flex flex-row justify-start items-center gap-2 pt-5 px-5">
              <AppleIcon size={25} />
              <span className="text-white font-semibold text-2xl">iOS app</span>
            </div>
            <span className="text-[#c1bfc7] px-5">
              Similarly, for iOS, we bring our expertise to deliver
              high-quality, user-centric experiences tailored for Apple devices.
            </span>
            <div className="w-full rounded-b-2xl">
              <img
                src={iosAppCardImg}
                alt="iOS app"
                loading="lazy"
                className="rounded-b-2xl w-full object-fit"
              />
            </div>
          </div>
        </div>
        <Link
          to="/mobile"
          className="flex flex-row justify-center items-center gap-2 p-3 rounded-lg bg-[#5860CF] btn-shadow hover:cursor-pointer xs:w-full md:w-auto"
        >
          <MobileIcon size={25} color={"#FFF"} />
          <span className="font-normal text-md text-white">
            More about apps
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Application;
