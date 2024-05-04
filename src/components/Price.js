import React from "react";
import { CorrectIcon, PremiumIcon, StandardIcon } from "../assets/icons/Icons";

function Price() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] z-10 space-y-10">
        <div className="flex flex-col justify-center items-center xs:W-full 2xl:w-1/2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            Price guide
          </span>
        </div>
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap w-full gap-5">
          <div className="flex flex-col justify-start items-start rounded-2xl bg-[#ffffff0d] border border-[#363541] p-5 gap-5 backdrop-blur xs:w-full xl:w-1/2 2xl:w-1/3">
            <StandardIcon size={50} />
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-white font-bold text-3xl">Standard</span>
              <span className="text-[#c1bfc7] font-normal text-md">
                Web or Mobile application
              </span>
            </div>
            <span className="text-white font-semibold text-lg">
              What do we offer for you:
            </span>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Rapid, quality design
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Basic features
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Essential technology stack
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Standard user support
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Core functionality
                </span>
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center w-full xs:gap-2 md:gap-0">
              <span className="text-white font-semibold text-3xl">200€</span>
              <div className="flex flex-row justify-center items-center gap-2 p-3 rounded-lg bg-[#5860CF] btn-shadow hover:cursor-pointer w-auto">
                <span className="font-normal text-md text-white">
                  Get started today
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start rounded-2xl bg-[#ffffff0d] border border-[#363541] p-5 gap-5 backdrop-blur xs:w-full xl:w-1/2 2xl:w-1/3">
            <PremiumIcon size={50} />
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-white font-bold text-3xl">Premium</span>
              <span className="text-[#c1bfc7] font-normal text-md">
                Web or Mobile application
              </span>
            </div>
            <span className="text-white font-semibold text-lg">
              What do we offer for you:
            </span>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Customized design
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Advanced features
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Cutting-edge technology stack
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Premium user support
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Tailored functionality
                </span>
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center w-full xs:gap-2 md:gap-0">
              <span className="text-white font-semibold text-3xl">200€+</span>
              <div className="flex flex-row justify-center items-center p-3 rounded-lg bg-[#5860CF] btn-shadow hover:cursor-pointer w-auto">
                <span className="font-normal text-md text-white">
                  Get started today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
