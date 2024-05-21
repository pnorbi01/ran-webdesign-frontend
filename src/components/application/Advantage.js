import React from "react";
import { RocketIcon, CodeIcon, DollarIcon } from "../../assets/icons/Icons";

function Advantage() {
  return (
    <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap mt-10 mb-44 xs:w-full 2xl:w-2/3 gap-5">
      <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full xl:w-1/2 2xl:w-1/3">
        <RocketIcon size={40} />
        <span className="text-[#c1bfc7] font-semibold text-lg">
          The mobile app catapults your business into the modern era with
          cutting-edge solutions and technologies.
        </span>
      </div>
      <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full xl:w-1/2 2xl:w-1/3">
        <CodeIcon size={40} />
        <span className="text-[#c1bfc7] font-semibold text-lg">
          If you're struggling to find the perfect software fit and require a
          custom system that can seamlessly handle a high volume of users,
          you're in the right spot
        </span>
      </div>
      <div className="bg-line card-border flex flex-col justify-start items-start p-5 gap-3 bg-[#0b0b17] rounded-2xl xs:w-full xl:w-1/2 2xl:w-1/3">
        <DollarIcon size={40} />
        <span className="text-[#c1bfc7] font-semibold text-lg">
          Is your competitor already utilizing a mobile app to cut costs or
          enhance user experience? Reach out to us, and we'll assist you in
          achieving the same!
        </span>
      </div>
    </div>
  );
}

export default Advantage;
