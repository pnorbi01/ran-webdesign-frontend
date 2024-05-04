import React from "react";
import {
  CorrectIcon,
  XIcon,
  BatteryFullIcon,
  BatteryLowIcon,
} from "../assets/icons/Icons";

function WhyUs() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] z-10 space-y-10">
        <div className="flex flex-col justify-center items-center xs:W-full 2xl:w-1/2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            Sick of trying to find a reliable, experienced design team?
          </span>
        </div>
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap w-full gap-5">
          <div className="flex flex-col justify-start items-start rounded-2xl bg-[#ffffff0d] border border-[#363541] p-5 gap-5 backdrop-blur xs:w-full xl:w-1/2 2xl:w-1/3">
            <BatteryLowIcon size={70} />
            <span className="text-white font-bold text-lg">
              Finding a reliable design team has been frustrating due to
              inconsistent quality and unpredictable pricing.
            </span>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="flex flex-row justify-start items-center gap-3">
                <XIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Inconsistent quality of work
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <XIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Lack of clear communication
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <XIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Unpredictable pricing
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <XIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Slow response times
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <XIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Limited design options
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start rounded-2xl bg-[#ffffff0d] border border-[#363541] p-5 gap-5 backdrop-blur xs:w-full xl:w-1/2 2xl:w-1/3">
            <BatteryFullIcon size={70} />
            <span className="text-white font-bold text-lg">
              You can finally breathe easy with our fixed pricing and
              user-friendly interface, backed by an experienced design team.
            </span>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  User-Friendly UI
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Fixed pricing model
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Experienced design team
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Transparent communication
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <CorrectIcon size={25} />
                <span className="text-[#c1bfc7] font-semibold w-full">
                  Wide range of design solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
