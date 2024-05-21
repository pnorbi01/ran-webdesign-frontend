import React from "react";
import cardLight2 from "../../assets/images/card-light2.png";
import cardGrid from "../../assets/images/card-grid.svg";

function ITAndBusinessApproachCard() {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0a0118] border border-[#a9a3c23d] xs:col-span-2 xl:col-span-1">
      <div className="card-grid flex justify-center items-center h-[80%] w-full relative">
        <img
          src={cardLight2}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
        />
        <img
          src={cardGrid}
          alt="Card grid"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
        />
        <div className="flex flex-row justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-end w-full h-1/2 gap-1">
              <div className="light-circle-bg w-16 h-12 rounded-t-2xl bg-[#ffffff0d] backdrop-blur"></div>
              <div className="light-circle-bg w-16 h-40 rounded-t-2xl bg-[#ffffff0d] backdrop-blur"></div>
              <div className="light-circle-bg w-16 h-24 rounded-t-2xl bg-[#ffffff0d] backdrop-blur"></div>
              <div className="light-circle-bg w-16 h-12 rounded-t-2xl bg-[#ffffff0d] backdrop-blur"></div>
            </div>
            <div className="flex flex-row justify-between items-center w-full h-16">
              <div className="flex flex-row justify-start items-center gap-1">
                <div className="light-circle-bg w-2 h-2 rounded-full border border-[#8566ff33]"></div>
                <span className="text-xs text-[#9b96b0]">iOS</span>
              </div>
              <div className="flex flex-row justify-start items-center gap-1">
                <div className="light-circle-bg w-2 h-2 rounded-full border border-[#8566ff33]"></div>
                <span className="text-xs text-[#9b96b0]">Android</span>
              </div>
              <div className="flex flex-row justify-start items-center gap-1">
                <div className="light-circle-bg w-2 h-2 rounded-full border border-[#8566ff33]"></div>
                <span className="text-xs text-[#9b96b0]">React Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          IT & Business Approach
        </span>
      </div>
    </div>
  );
}

export default ITAndBusinessApproachCard;
