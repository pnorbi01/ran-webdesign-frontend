import React from "react";
import cardLight2 from "../../assets/images/card-light2.png";
import tailoredProcessLine1 from "../../assets/images/tailored-process-line1.svg";
import tailoredProcessLine2 from "../../assets/images/tailored-process-line2.svg";
import tailoredProcessLine3 from "../../assets/images/tailored-process-line3.svg";
import tailoredProcessLine4 from "../../assets/images/tailored-process-line4.svg";
import tailoredProcessLine5 from "../../assets/images/tailored-process-line5.svg";
import {
  AppleIcon,
  AndroidIcon,
  ReactIcon,
  MobileIcon,
  CodeIcon,
} from "../../assets/icons/Icons";

function TailoredProcessCard() {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0a0118] border border-[#a9a3c23d] xs:col-span-2 xl:col-span-1 overflow-hidden">
      <div className="card-grid flex justify-center items-center h-[80%] w-full relative">
        <img
          src={cardLight2}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
        />
        <div
          className="animate-[tailoredProcessAnim_4s_ease-in-out_infinite] absolute top-0 left-[15%]"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <img
            src={tailoredProcessLine1}
            alt="Tailored process customized to your needs"
            loading="lazy"
            className="relative"
          />
          <div className="light-circle-bg flex flex-row justify-center items-center h-16 w-16 rounded-full absolute left-1/2 transform -translate-x-1/2 border border-[#8566ff33]">
            <AppleIcon className="w-8 h-8 xl:w-9 xl:h-9" />
          </div>
        </div>
        <div
          className="animate-[tailoredProcessAnim_4s_ease-in-out_infinite] absolute top-0 left-1/2"
          style={{
            animationDelay: "1s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <img
            src={tailoredProcessLine2}
            alt="Tailored process customized to your needs"
            loading="lazy"
            className="relative"
          />
          <div className="light-circle-bg flex flex-row justify-center items-center h-20 w-20 rounded-full absolute left-1/2 transform -translate-x-1/2 border border-[#8566ff33]">
            <ReactIcon className="w-8 h-8 xl:w-12 xl:h-12" />
          </div>
        </div>
        <div
          className="animate-[tailoredProcessAnim_4s_ease-in-out_infinite] absolute top-0 right-[15%]"
          style={{
            animationDuration: "5s",
            animationDelay: "1.5s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <img
            src={tailoredProcessLine3}
            alt="Tailored process customized to your needs"
            loading="lazy"
            className="relative"
          />
          <div className="light-circle-bg flex flex-row justify-center items-center h-16 w-16 rounded-full absolute left-1/2 transform -translate-x-1/2 border border-[#8566ff33]">
            <AndroidIcon className="w-8 h-8" />
          </div>
        </div>
        <div
          className="animate-[tailoredProcessAnim_4s_ease-in-out_infinite] absolute top-0 left-[35%]"
          style={{
            animationDelay: "2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <img
            src={tailoredProcessLine4}
            alt="Tailored process customized to your needs"
            loading="lazy"
            className="relative"
          />
          <div className="light-circle-bg flex flex-row justify-center items-center h-10 w-10 rounded-full absolute left-1/2 transform -translate-x-1/2 border border-[#8566ff33]">
            <MobileIcon size={15} />
          </div>
        </div>
        <div
          className="animate-[tailoredProcessAnim_4s_ease-in-out_infinite] absolute top-0 right-[35%]"
          style={{
            animationDelay: "2.5s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <img
            src={tailoredProcessLine5}
            alt="Tailored process customized to your needs"
            loading="lazy"
            className="relative"
          />
          <div className="light-circle-bg flex flex-row justify-center items-center h-10 w-10 rounded-full absolute left-1/2 transform -translate-x-1/2 border border-[#8566ff33]">
            <CodeIcon size={15} />
          </div>
        </div>
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          Tailored process customized to your needs
        </span>
      </div>
    </div>
  );
}

export default TailoredProcessCard;
