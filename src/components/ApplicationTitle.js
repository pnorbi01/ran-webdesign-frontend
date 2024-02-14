import {
  faAndroid,
  faApple,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center h-8 xs:w-[80%] md:w-full overflow-hidden relative">
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-0 gap-2"
        style={{
          animationDelay: "2s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <FontAwesomeIcon icon={faApple} size="2xl" className="transition-all" />
        <h3 className="font-medium text-md text-[#1d1d1f] text-center">iOS</h3>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndOut_1s_ease-in-out] opacity-0 absolute top-1 gap-2"
        style={{
          animationDelay: "3s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <FontAwesomeIcon
          icon={faAndroid}
          size="xl"
          className="text-[#4CAF50]"
        />
        <h3 className="font-medium text-md text-[#4CAF50] text-center">
          Android
        </h3>
      </div>
      <div
        className="flex flex-row justify-center items-center animate-[fadeInAndStay_1s_ease-in] opacity-0 absolute top-0 gap-2"
        style={{
          animationDelay: "4s",
          animationFillMode: "forwards",
          animationDuration: "1s",
        }}
      >
        <FontAwesomeIcon icon={faReact} size="2xl" className="text-[#4FC0E8]" />
        <h3 className="font-medium text-md text-[#4FC0E8] text-center">
          React Native
        </h3>
      </div>
    </div>
  );
}

export default HeroTitle;
