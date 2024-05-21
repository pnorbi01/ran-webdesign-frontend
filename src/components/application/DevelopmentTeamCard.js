import React from "react";
import cardLight2 from "../../assets/images/card-light2.png";
import developmentTeamCircle1 from "../../assets/images/development-team-circle1.svg";
import developmentTeamCircle2 from "../../assets/images/development-team-circle2.svg";
import ranPurple from "../../assets/images/purpleLogo.png";

function DevelopmentTeamCard() {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0a0118] border border-[#a9a3c23d] xs:col-span-2 xl:col-span-1">
      <div className="card-grid flex justify-center items-center h-[80%] w-full relative overflow-clip">
        <img
          src={cardLight2}
          alt="Card light"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
        />
        <img
          src={developmentTeamCircle1}
          alt="Development team circle"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-[252px] h-[252px] relative rotate-45">
          <img
            src={developmentTeamCircle2}
            alt="Development team circle"
            loading="lazy"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="light-circle-bg flex flex-col justify-center items-center h-12 w-12 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#8566ff33] rounded-full backdrop-blur z-10 -rotate-45">
            <div className="icon-bg h-3 w-3 rounded-full"></div>
            <div className="icon-bg h-3 w-5 rounded-t-full"></div>
          </div>
          <div
            className="animate-[developmentTeamWave_3.5s_ease-in-out_infinite] icon-bg h-16 w-16 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
          <div className="light-circle-bg flex flex-col justify-center items-center h-12 w-12 absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#8566ff33] rounded-full backdrop-blur z-10 -rotate-45">
            <div className="icon-bg h-3 w-3 rounded-full"></div>
            <div className="icon-bg h-3 w-5 rounded-t-full"></div>
          </div>
          <div
            className="animate-[developmentTeamWave_3.5s_ease-in-out_infinite] icon-bg h-16 w-16 rounded-full absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
          <div className="light-circle-bg flex flex-col justify-center items-center h-12 w-12 absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 border border-[#8566ff33] rounded-full backdrop-blur z-10 -rotate-45">
            <div className="icon-bg h-3 w-3 rounded-full"></div>
            <div className="icon-bg h-3 w-5 rounded-t-full"></div>
          </div>
          <div
            className="animate-[developmentTeamWave_3.5s_ease-in-out_infinite] icon-bg h-16 w-16 rounded-full absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
          <div className="light-circle-bg flex flex-col justify-center items-center h-12 w-12 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 border border-[#8566ff33] rounded-full backdrop-blur z-10 -rotate-45">
            <div className="icon-bg h-3 w-3 rounded-full"></div>
            <div className="icon-bg h-3 w-5 rounded-t-full"></div>
          </div>
          <div
            className="animate-[developmentTeamWave_3.5s_ease-in-out_infinite] icon-bg h-16 w-16 rounded-full absolute top-1/2 left-full transform translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(.6,.6,0,1)",
            }}
          ></div>
        </div>
        <div className="icon-bg flex flex-row justify-center items-center h-20 w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#8566ff33] rounded-full">
          <img
            src={ranPurple}
            alt="RAN Webdesign logo"
            loading="lazy"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          I have a clear idea and need a development team to bring it to life.
        </span>
      </div>
    </div>
  );
}

export default DevelopmentTeamCard;
