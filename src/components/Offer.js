import React from "react";
import uiCard from "../assets/images/ui-card.svg";
import maintenanceCard from "../assets/images/maintenance-card.svg";
import easyCommCard from "../assets/images/easy-comm-card.svg";
import fastCard from "../assets/images/fast-card.svg";
import sameTeamCard from "../assets/images/same-team-card.svg";
import transactionCard from "../assets/images/transaction-card.svg";

function Offer() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%]  md:w-[80%] z-10 space-y-10">
        <div className="flex flex-col justify-center items-center xs:W-full 2xl:w-1/2 space-y-5">
          <div className="bg-[#ffffff0d] text-white rounded-full border border-[#363541] px-2">
            <span className="font-bold text-md text-center text-neutral-500">
              Offerings
            </span>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            RAN partners can expect:
          </span>
        </div>
        <div className="grid grid-cols-3 auto-rows-auto gap-4 xs:w-full 2xl:w-[80%] m-auto">
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 2xl:col-span-2">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-3xl text-[#cdd0d6]">
                We are here for you, whatever comes up. From troubleshooting to
                brainstorming..
              </span>
            </div>
            <img src={maintenanceCard} alt="Maintenance" loading="lazy" />
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 2xl:col-span-1">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-3xl text-[#cdd0d6]">
                Intuitive, User-Friendly accessible interfaces that put you a
                cut above the rest.
              </span>
            </div>
            <img src={uiCard} alt="User-Friendly UI" loading="lazy" />
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 2xl:col-span-1">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-3xl text-[#cdd0d6]">
                Streamlined, swift UI. Elevate user experiences for maximum
                efficiency and productivity.
              </span>
            </div>
            <img src={fastCard} alt="Fast apps" loading="lazy" />
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 2xl:col-span-2">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-3xl text-[#cdd0d6]">
                Open lines of communication at every step! We appreciate a
                smooth operation.
              </span>
            </div>
            <img src={easyCommCard} alt="Easy communication" loading="lazy" />
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 2xl:col-span-2">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-3xl text-[#cdd0d6]">
                Sprint-based delivery ensuring rapid results, with clear
                timelines and fixed costs.
              </span>
            </div>
            <img
              src={transactionCard}
              alt="Project transaction"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 2xl:col-span-1">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-3xl text-[#cdd0d6]">
                The consistent presence of our team from start to finish of your
                project.
              </span>
            </div>
            <img src={sameTeamCard} alt="Same team" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
