import React from "react";
import { HiCode, HiDeviceMobile, HiSupport } from "react-icons/hi";

function Service() {
  return (
    <section className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-[90%] relative">
        <div className="before:content-['3'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold bg-[#2D7CFC]"></div>
        <div className="before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-gradient-to-b from-[#fafafc] to-[#2D7CFC]"></div>
        <div className="flex flex-col justify-center items-center gap-2 p-5">
          <h3 className="font-extrabold text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2D7CFC] to-[#71B9F5]">
            Services
          </h3>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[rgba(0,0,0,.7)] to-black font-extrabold text-3xl text-center">
            Experience the Power.
          </h1>
          <span className="text-[#8b98a5] font-normal text-base text-center sm:w-[80%] md:w-[75%] lg:w-[80%]">
            Details matter, and we've put a lot of love into each and every one
            of them.
          </span>
        </div>
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap md:flex-nowrap w-full p-3">
          <div className="platform group flex flex-col justify-start items-start w-[400px] p-5 bg-[#0d224708] border-1 border-[#e5e7eb] xs:rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-t-none gap-5 hover:cursor-pointer">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="platform flex justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl group-hover:bg-[#0d2247] transition-all">
                <HiCode className="text-[#0d2247] h-8 w-8 group-hover:text-white transition-all" />
              </div>
              <h3 className="font-bold text-xl">Web development</h3>
            </div>
            <p className="text-[#3d4e6c]">
              Individual web development tailored to your needs.
            </p>
          </div>
          <div className="platform group flex flex-col justify-start items-start w-[400px] p-5 bg-[#0d224708] xs:border-y-0 xs:border-x-1 md:border-y-1 md:border-x-0 border-[#e5e7eb] gap-5 hover:cursor-pointer">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="platform flex justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl group-hover:bg-[#0d2247] transition-all">
                <HiDeviceMobile className="text-[#0d2247] h-8 w-8 group-hover:text-white transition-all" />
              </div>
              <h3 className="font-bold text-xl">Mobile app development</h3>
            </div>
            <p className="text-[#3d4e6c]">
              Design and development of ideal solutions natively or with a
              cross-platform solution.
            </p>
          </div>
          <div className="platform group flex flex-col justify-start items-start w-[400px] p-5 bg-[#0d224708] border-1 border-[#e5e7eb] xs:rounded-b-xl md:rounded-tr-xl md:rounded-br-xl md:rounded-b-none gap-5 hover:cursor-pointer">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="platform flex justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl group-hover:bg-[#0d2247] transition-all">
                <HiSupport className="text-[#0d2247] h-8 w-8 group-hover:text-white transition-all" />
              </div>
              <h3 className="font-bold text-xl">Maintenance</h3>
            </div>
            <p className="text-[#3d4e6c]">
              Whatever comes up, we'll be here to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

{
  /* <div className="platform group flex flex-col justify-start items-start w-54 p-5 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-tl-xl rounded-bl-xl gap-5 hover:cursor-pointer">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="platform flex justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl group-hover:bg-[#0d2247] transition-all">
                <HiCode className="text-[#0d2247] h-8 w-8 group-hover:text-white transition-all" />
              </div>
              <h3 className="font-bold text-xl">Web development</h3>
            </div>
            <p className="text-[#3d4e6c]">
              Individual web development tailored to your needs.
            </p>
          </div>
          <div className="platform group flex flex-col justify-start items-start w-54 p-5 bg-[#0d224708] border-y-1 border-[#e5e7eb] gap-5 hover:cursor-pointer">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="platform flex justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl group-hover:bg-[#0d2247] transition-all">
                <HiDeviceMobile className="text-[#0d2247] h-8 w-8 group-hover:text-white transition-all" />
              </div>
              <h3 className="font-bold text-xl">Web development</h3>
            </div>
            <p className="text-[#3d4e6c]">
              Design and development of ideal solutions natively or with a
              cross-platform solution.
            </p>
          </div>
          <div className="platform group flex flex-col justify-start items-start w-54 p-5 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-tr-xl rounded-br-xl gap-5 hover:cursor-pointer">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="platform flex justify-center items-center p-2 bg-[#0d224708] border-1 border-[#e5e7eb] rounded-2xl group-hover:bg-[#0d2247] transition-all">
                <HiSupport className="text-[#0d2247] h-8 w-8 group-hover:text-white transition-all" />
              </div>
              <h3 className="font-bold text-xl">Web development</h3>
            </div>
            <p className="text-[#3d4e6c]">
              Whatever comes up, we'll be here to help.
            </p>
          </div>*/
}
