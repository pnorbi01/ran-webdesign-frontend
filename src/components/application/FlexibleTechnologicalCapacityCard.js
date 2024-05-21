import React from "react";
import cardLight2 from "../../assets/images/card-light2.png";
import technicalBg from "../../assets/images/technical-card-bg.svg";
import ranPurple from "../../assets/images/purpleLogo.png";

function FlexibleTechnologicalCapacity() {
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
          src={ranPurple}
          alt="Card grid"
          loading="lazy"
          height={100}
          width={100}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"
        />
        <img
          src={technicalBg}
          alt="Flexible technological capacity tailored to customer requirements"
          loading="lazy"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
        />
      </div>
      <div className="bg-line flex flex-row justify-center items-start w-[90%] p-3 pb-10">
        <span className="text-[#c1bfc7] font-semibold text-2xl text-center">
          Flexible technological capacity tailored to customer requirements
        </span>
      </div>
    </div>
  );
}

export default FlexibleTechnologicalCapacity;
