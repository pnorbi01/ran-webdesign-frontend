import React from "react";
import { EnvelopeIcon, MobileIcon } from "../assets/icons/Icons";

function Contact() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="line flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] z-10 space-y-10 pt-[5rem] relative h-full">
        <div className="line-light absolute top-0 left-1/2 transform -translate-x-1/2 xs:p-40 xl:p-72 h-full w-full"></div>
        <div className="flex flex-col justify-center items-center xs:W-full 2xl:w-1/2 space-y-5">
          <div className="bg-[#ffffff0d] text-white rounded-full border border-[#ffffff0a] px-3 py-1">
            <span className="font-medium text-md text-center text-white">
              Contact
            </span>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
            Do you have an idea?
          </span>
          <div className="contact-card flex flex-col justify-start items-start rounded-xl bg-[#0a0118] xs:w-full md:w-1/2 gap-5 relative">
            <span className="text-white font-bold text-lg pt-5 pl-5">
              Get in touch with us
            </span>
            <div className="flex flex-row justify-start items-center gap-2 pl-5 z-10">
              <EnvelopeIcon size={20} color={"#9b96b0"} />
              <a
                href="mailto:info@ranwebdesign.xyz"
                className="text-[#9b96b0] text-sm"
              >
                info@ranwebdesign.xyz
              </a>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 pl-5 z-10">
              <MobileIcon size={20} color={"#9b96b0"} />
              <a href="tel:+381606191925" className="text-[#9b96b0] text-sm">
                +381 60 619 1925
              </a>
            </div>
            <span className="text-[#9b96b0] text-xs pb-5 pl-5">
              Feel free to contact us, we're happy to help!😎
            </span>
            <div className="contact-card-light w-full h-full absolute rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
