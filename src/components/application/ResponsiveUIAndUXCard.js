import React from "react";
import ranPurple from "../../assets/images/purpleLogo.png";
import cardLight2 from "../../assets/images/card-light2.png";

function ResponsiveUIAndUXCard() {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0a0118] border border-[#a9a3c23d] xs:col-span-2 xl:col-span-1">
      <div className="flex justify-center items-center h-[80%] w-full relative">
        <img
          src={cardLight2}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
        />
        <div className="flex flex-col justify-start items-start h-1/2 xs:w-2/3 md:w-1/3 xl:w-1/2 bg-[#ffffff0d] backdrop-blur rounded-lg -rotate-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-row justify-start w-full items-center bg-[#ffffff0d] backdrop-blur rounded-t-lg p-3 gap-1">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
          </div>
          <div className="flex flex-row justify-start items-start h-full w-full">
            <div className="flex flex-col justify-start items-start w-1/3 h-full gap-2 bg-[#ffffff0d] p-3">
              <img
                src={ranPurple}
                alt="RAN Webdesign logo"
                loading="lazy"
                height={20}
                width={20}
                className="opacity-50"
              />
              <span className="text-[#9b96b0] text-[9px] font-semibold">
                Home
              </span>
              <span className="text-[#9b96b0] text-[9px] font-semibold">
                Mobile app
              </span>
              <span className="text-[#9b96b0] text-[9px] font-semibold">
                Skills
              </span>
              <span className="text-[#9b96b0] text-[9px] font-semibold">
                Contact
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-2/3 p-3 gap-2">
              <div className="w-full h-3 rounded-full bg-[#ffffff0d]"></div>
              <div className="w-full h-3 rounded-full bg-[#ffffff0d]"></div>
              <div className="w-full h-3 rounded-full bg-[#ffffff0d]"></div>
              <div className="flex flex-row justify-between items-center w-full gap-1">
                <div className="w-1/3 h-3 rounded-full bg-[#ffffff0d]"></div>
                <div className="w-1/3 h-3 rounded-full bg-[#ffffff0d]"></div>
                <div className="w-1/3 h-3 rounded-full bg-[#ffffff0d]"></div>
              </div>
              <div className="flex flex-row justify-between items-center w-full gap-1">
                <div className="w-1/3 h-12 rounded-lg bg-[#ffffff0d]"></div>
                <div className="w-1/3 h-12 rounded-lg bg-[#ffffff0d]"></div>
                <div className="w-1/3 h-12 rounded-lg bg-[#ffffff0d]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-24 h-40 bg-[#ffffff0d] backdrop-blur rounded-lg absolute top-1/2 xs:right-0 md:right-[20%] xl:right-[10%] transform -translate-x-1/2 -translate-y-1/2 z-20 p-2 gap-3 rotate-12">
          <div className="w-8 h-2 rounded-full bg-[#ffffff0d]"></div>
          <div className="flex flex-col justify-center items-center gap-1 p-1 w-full h-full">
            <div className="w-full h-3 rounded-full bg-[#ffffff0d]"></div>
            <div className="w-full h-3 rounded-full bg-[#ffffff0d]"></div>
            <div className="w-full h-3 rounded-full bg-[#ffffff0d]"></div>
            <div className="w-full h-full rounded-lg bg-[#ffffff0d]"></div>
          </div>
        </div>
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          Responsive UX / UI
        </span>
      </div>
    </div>
  );
}

export default ResponsiveUIAndUXCard;
