import React from "react";
import cardLight2 from "../../assets/images/card-light2.png";
import superiorAppBg from "../../assets/images/superior-app-bg.svg";
import superiorAppLine1 from "../../assets/images/superior-app-line1.svg";
import superiorAppLine2 from "../../assets/images/superior-app-line2.svg";
import superiorAppLine3 from "../../assets/images/superior-app-line3.svg";
import superiorAppLine4 from "../../assets/images/superior-app-line4.svg";
import superiorAppLine5 from "../../assets/images/superior-app-line5.svg";

function SuperiorMobileAppCard() {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0a0118] border border-[#a9a3c23d] xs:col-span-2 xl:col-span-1">
      <div className="card-grid flex justify-center items-center h-[80%] w-full relative">
        <img
          src={cardLight2}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
        />
        <div
          className="animate-[superiorIconAnim_3.5s_ease_infinite] icon-bg w-[98px] h-[160px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <img
            src={superiorAppBg}
            alt="Superior mobile app"
            loading="lazy"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 h-full w-full"
          />
        </div>
        <img
          src={superiorAppLine1}
          alt="Superior mobile app line"
          loading="lazy"
          className="animate-[superiorAppStrokAnim1_3.5s_ease-in-out_infinite] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
        <img
          src={superiorAppLine2}
          alt="Superior mobile app line"
          loading="lazy"
          className="animate-[superiorAppStrokAnim2_3.5s_ease-in-out_infinite] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
        <img
          src={superiorAppLine3}
          alt="Superior mobile app line"
          loading="lazy"
          className="animate-[superiorAppStrokAnim3_3.5s_ease-in-out_infinite] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
        <img
          src={superiorAppLine4}
          alt="Superior mobile app line"
          loading="lazy"
          className="animate-[superiorAppStrokAnim4_3.5s_ease-in-out_infinite] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
        <img
          src={superiorAppLine5}
          alt="Superior mobile app line"
          loading="lazy"
          className="animate-[superiorAppStrokAnim5_3.5s_ease-in-out_infinite] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          I require a superior mobile app; the current one doesn't meet my
          business requirements.
        </span>
      </div>
    </div>
  );
}

export default SuperiorMobileAppCard;
