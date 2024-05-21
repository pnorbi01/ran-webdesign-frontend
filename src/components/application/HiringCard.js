import React from "react";
import leftCardLight from "../../assets/images/left-card-light.png";
import rightCardLight from "../../assets/images/right-card-light.png";
import hiringCardBg from "../../assets/images/hiring-card-bg.svg";
import ranPurple from "../../assets/images/purpleLogo.png";
import {
  ChartIcon,
  DollarIcon,
  RocketIcon,
  ScaleIcon,
} from "../../assets/icons/Icons";

function HiringCard() {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0a0118] border border-[#a9a3c23d] xs:col-span-2 xl:col-span-1">
      <div className="card-grid flex justify-center items-center h-[80%] w-full relative">
        <img
          src={leftCardLight}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 h-full"
        />
        <img
          src={rightCardLight}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full"
        />
        <div className="w-[246px] h-[214px] relative">
          <img
            src={hiringCardBg}
            alt="Hiring card bg"
            loading="lazy"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="icon-bg flex flex-row justify-center items-center h-36 w-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#8566ff33] rounded-full">
            <img
              src={ranPurple}
              alt="RAN Webdesign logo"
              loading="lazy"
              width={60}
              height={60}
              className="opacity-50"
            />
          </div>
          <div className="light-circle-bg flex flex-row justify-center items-center w-12 h-12 rounded-full absolute -top-1 -left-5 backdrop-blur border border-[#8566ff33]">
            <ChartIcon size={20} />
          </div>
          <div className="light-circle-bg flex flex-row justify-center items-center w-12 h-12 rounded-full absolute -bottom-1 -left-5 backdrop-blur border border-[#8566ff33]">
            <ScaleIcon size={20} />
          </div>
          <div className="light-circle-bg flex flex-row justify-center items-center w-12 h-12 rounded-full absolute -bottom-1 -right-5 backdrop-blur border border-[#8566ff33]">
            <RocketIcon size={20} />
          </div>
          <div className="light-circle-bg flex flex-row justify-center items-center w-12 h-12 rounded-full absolute -top-1 -right-5 backdrop-blur border border-[#8566ff33]">
            <DollarIcon size={20} />
          </div>
        </div>
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          I'm considering hiring external developers for a project.
        </span>
      </div>
    </div>
  );
}

export default HiringCard;
