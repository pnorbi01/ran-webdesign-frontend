import React from "react";
import leftCardLight from "../../assets/images/left-card-light.png";
import rightCardLight from "../../assets/images/right-card-light.png";
import enhanceAppCardCircle from "../../assets/images/enhance-app-card-circle.svg";
import enhanceAppCardArrowBlur from "../../assets/images/enhance-app-card-arrow-blur.svg";
import enhanceAppCardArrow from "../../assets/images/enhance-app-card-arrow.svg";
import star from "../../assets/images/star.svg";
import { MobileIcon } from "../../assets/icons/Icons";

function EnhanceAppCard() {
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
        <img
          src={enhanceAppCardCircle}
          alt="Circle"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={enhanceAppCardArrow}
          alt="Arrow"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={enhanceAppCardArrowBlur}
          alt="Arrow blur"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative w-3/4 h-3/4">
          <div className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={star}
              alt="Star"
              loading="lazy"
              className="animate-[starAnimation_2.4s_ease_infinite] absolute top-0 right-0"
              style={{
                animationIterationCount: "infinite",
                animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
              }}
            />
            <img
              src={star}
              alt="Star"
              loading="lazy"
              className="animate-[starAnimation_2.4s_ease_infinite] absolute top-0 left-0 h-[10px] w-[10px]"
              style={{
                animationDelay: "0.5s",
                animationIterationCount: "infinite",
                animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
              }}
            />
            <img
              src={star}
              alt="Star"
              loading="lazy"
              className="animate-[starAnimation_2.4s_ease_infinite] absolute top-1/2 xs:left-0 md:left-5 h-[15px] w-[15px]"
              style={{
                animationDelay: "1s",
                animationIterationCount: "infinite",
                animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
              }}
            />
            <img
              src={star}
              alt="Star"
              loading="lazy"
              className="animate-[starAnimation_2.4s_ease_infinite] absolute bottom-0 right-10 h-[20] w-[20px]"
              style={{
                animationDelay: "1.5s",
                animationIterationCount: "infinite",
                animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
              }}
            />
          </div>
        </div>
        <div className="circle-bg flex justify-center items-center w-[204px] h-[204px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-clip">
          <MobileIcon size={70} color={"#FFF"} />
        </div>
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          I'm looking to enhance my current mobile app.
        </span>
      </div>
    </div>
  );
}

export default EnhanceAppCard;
