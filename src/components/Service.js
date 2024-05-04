import React from "react";
import { EyeIcon, GoalsIcon, MobileIcon } from "../assets/icons/Icons";

function Service() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] z-10 space-y-10">
        <div className="flex flex-col justify-center items-center xs:W-full 2xl:w-1/2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            Why are we better than others?
          </span>
        </div>
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap xs:w-full 2xl:w-2/3 gap-5">
          <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full md:w-1/2 2xl:w-1/3">
            <MobileIcon size={40} />
            <span className="text-[#c1bfc7] font-semibold text-lg">
              We make outstanding quality Android, iOS and Web applications
            </span>
          </div>
          <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full md:w-1/2 2xl:w-1/3">
            <GoalsIcon size={40} />
            <span className="text-[#c1bfc7] font-semibold text-lg">
              We understand and focus on your business goals
            </span>
          </div>
          <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full md:w-1/2 2xl:w-1/3">
            <EyeIcon size={40} />
            <span className="text-[#c1bfc7] font-semibold text-lg">
              We view you as a partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
