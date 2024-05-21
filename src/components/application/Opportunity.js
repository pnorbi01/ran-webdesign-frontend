import React from "react";
import { MobileIcon, ScaleIcon, FireIcon } from "../../assets/icons/Icons";
import iosAppCardImg from "../../assets/images/ios-app-card-img.png";

function Opportunity() {
  return (
    <div className="flex flex-col justify-center items-flex-start mt-10 xs:w-full 2xl:w-2/3">
      <div className="flex flex-row justify-between items-start xs:flex-wrap md:flex-nowrap xs:gap-0 md:gap-5 bg-[#ffffff0d] backdrop-blur rounded-t-2xl w-full">
        <div className="flex flex-col justify-start items-start xs:w-full md:w-1/3 gap-3 p-5 ">
          <MobileIcon size={40} />
          <span className="text-[#c1bfc7] font-semibold text-lg">
            Android and iOS mobile app development
          </span>
        </div>
        <div className="flex flex-col justify-start items-start xs:w-full md:w-1/3 gap-3 xs:px-5 md:p-5 ">
          <ScaleIcon size={40} />
          <span className="text-[#c1bfc7] font-semibold text-lg">
            Scalable solutions
          </span>
        </div>
        <div className="flex flex-col justify-start items-start xs:w-full md:w-1/3 gap-3 p-5 ">
          <FireIcon size={40} />
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
  );
}

export default Opportunity;
