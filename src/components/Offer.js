import React from "react";
import uiCard from "../assets/images/ui-card.png";
import maintenanceCard from "../assets/images/maintenance-card.png";
import easyCommCard from "../assets/images/easy-comm-card.png";
import fastCard from "../assets/images/fast-card.png";
import sameTeamCard from "../assets/images/same-team-card.png";
import transactionCard from "../assets/images/transaction-card.png";
import light from "../assets/images/easy-comm-light.png";
import light2 from "../assets/images/easy-comm-light-second.png";
import light3 from "../assets/images/easy-comm-light-third.png";
import light4 from "../assets/images/easy-comm-light-fourth.png";
import light5 from "../assets/images/easy-comm-light-fifth.png";
import light6 from "../assets/images/easy-comm-light-sixth.png";
import light7 from "../assets/images/easy-comm-light-seventh.png";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 xs:w-full 2xl:w-[80%] m-auto">
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 md:col-span-2 lg:col-span-2 2xl:col-span-2">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-2xl lg:text-xl xl:text-3xl text-[#cdd0d6]">
                We are here for you, whatever comes up. From troubleshooting to
                brainstorming..
              </span>
            </div>
            <div className="relative">
              <img src={maintenanceCard} alt="Maintenance" loading="lazy" />
              <div className="maintenance-line-first absolute top-0 left-0 w-full h-full">
                <div
                  className="animate-[lineAnimationTop_8s_ease-in-out_infinite]"
                  style={{
                    animationDelay: "1s",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 md:col-span-2 lg:col-span-1 2xl:col-span-1">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-2xl  lg:text-xl xl:text-3xl text-[#cdd0d6]">
                Intuitive, User-Friendly accessible interfaces that put you a
                cut above the rest.
              </span>
            </div>
            <div className="relative">
              <img src={uiCard} alt="User-Friendly UI" loading="lazy" />
              <div className="rising-stars w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="animate-[rising_100s_ease-in-out_infinite] w-[2px] h-[2px]"
                  style={{
                    animationDuration: "100s",
                    animationFillMode: "forwards",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 md:col-span-2 lg:col-span-1 2xl:col-span-1">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-2xl  lg:text-xl xl:text-3xl text-[#cdd0d6]">
                Streamlined, swift UI. Elevate user experiences for maximum
                efficiency and productivity.
              </span>
            </div>
            <div className="relative">
              <img src={fastCard} alt="Fast apps" loading="lazy" />
              <div className="fast-line-first absolute top-0 left-0 w-full h-full">
                <div
                  className="animate-[lineAnimationTop_8s_ease-in-out_infinite]"
                  style={{
                    animationDelay: "1s",
                  }}
                ></div>
              </div>
              <div className="rising-stars w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="animate-[rising_100s_ease-in-out_infinite] w-[2px] h-[2px]"
                  style={{
                    animationDuration: "100s",
                    animationFillMode: "forwards",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 md:col-span-2 lg:col-span-2 2xl:col-span-2 relative">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-2xl  lg:text-xl xl:text-3xl text-[#cdd0d6]">
                Open lines of communication at every step! We appreciate a
                smooth operation.
              </span>
            </div>
            <img src={easyCommCard} alt="Easy communication" loading="lazy" />
            <div className="absolute top-0 xl:left-10 2xl:left-24 w-full h-full xs:hidden xl:block">
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-soft-light opacity-10 z-50 absolute top-0 left-0 w-full h-full">
                <img
                  src={light}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-soft-light  opacity-10 z-40 absolute top-0 left-0 w-full h-full">
                <img
                  src={light2}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-soft-light  opacity-10 z-30 absolute top-0 left-0 w-full h-full">
                <img
                  src={light3}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-soft-light  opacity-10 z-20 absolute top-0 left-0 w-full h-full">
                <img
                  src={light4}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-screen z-10 absolute top-0 left-0 w-full h-full">
                <img
                  src={light5}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-soft-light  opacity-10 z-0 absolute top-0 left-0 w-full h-full">
                <img
                  src={light6}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
              <div className="animate-[lightAnimation_5s_ease_infinite] light-wrapper mix-blend-screen  opacity-10 z-0 absolute top-0 left-0 w-full h-full">
                <img
                  src={light7}
                  loading="lazy"
                  alt="Easy communication light"
                  className="origin-top-right"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 md:col-span-2 lg:col-span-2 2xl:col-span-2">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-2xl  lg:text-xl xl:text-3xl text-[#cdd0d6]">
                Sprint-based delivery ensuring rapid results, with clear
                timelines and fixed costs.
              </span>
            </div>
            <div className="relative">
              <img
                src={transactionCard}
                alt="Project transaction"
                loading="lazy"
              />
              <div className="transaction-line-first absolute top-0 left-0 w-full h-full">
                <div
                  className="xs:animate-[lineAnimationRotateMobile_5s_ease-in-out_infinite] md:animate-[lineAnimationRotateTablet_5s_ease-in-out_infinite]"
                  style={{
                    animationDelay: "1s",
                  }}
                ></div>
              </div>
              <div className="transaction-line-second absolute top-0 left-0 w-full h-full">
                <div
                  className="xs:animate-[lineAnimationRotateMobile_5s_ease-in-out_infinite] md:animate-[lineAnimationRotateTablet_5s_ease-in-out_infinite]"
                  style={{
                    animationDelay: "1.5s",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl bg-[#0b0b17] card-border xs:col-span-3 md:col-span-2 lg:col-span-1 2xl:col-span-1">
            <div className="flex flex-row justify-start items-center w-full p-10 px-8">
              <span className="font-bold xs:text-lg md:text-2xl  lg:text-xl xl:text-3xl text-[#cdd0d6]">
                The consistent presence of our team from start to finish of your
                project.
              </span>
            </div>
            <div className="relative">
              <img src={sameTeamCard} alt="Same team" loading="lazy" />
              <div className="rising-stars w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="animate-[rising_100s_ease-in-out_infinite] w-[2px] h-[2px]"
                  style={{
                    animationDuration: "100s",
                    animationFillMode: "forwards",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
