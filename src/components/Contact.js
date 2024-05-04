import React from "react";
import {
  UpRightArrowIcon,
  EnvelopeIcon,
  ContactIcon,
  MobileIcon,
} from "../assets/icons/Icons";

function Contact() {
  return (
    <section className="flex flex-row justify-center items-center w-full my-24">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] z-10 space-y-10">
        <div className="flex flex-row justify-center items-flex-start xs:flex-wrap lg:flex-nowrap xs:w-full 2xl:w-[80%]">
          <div className="bg-line flex flex-col justify-start items-center p-5 py-10 gap-3 bg-[#ffffff0d] border border-[#363541] backdrop-blur rounded-2xl w-full">
            <ContactIcon size={60} />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
              Get in touch with us
            </span>
            <span className="text-[#c1bfc7] font-bold text-lg text-center">
              If you have any questions, feel free to contact us, we are happy
              to help!
            </span>
            <div className="flex flex-row justify-center items-flex-start xs:flex-wrap md:flex-nowrap xs:w-full xl:w-1/2 gap-5 mt-5">
              <div className="flex flex-col justify-start items-center bg-[#ffffff0d] backdrop-blur rounded-xl p-3 gap-2 xs:w-full xl:w-1/2">
                <MobileIcon size={40} />
                <div className="flex flex-row justify-center items-start gap-1">
                  <a
                    href="tel:+381606191925"
                    className="font-semibold text-white"
                  >
                    +381 60 619 1925
                  </a>
                  <UpRightArrowIcon size={10} color={"#FFF"} />
                </div>
              </div>
              <div className="flex flex-col justify-start items-center bg-[#ffffff0d] backdrop-blur rounded-xl p-3 gap-2 xs:w-full xl:w-1/2">
                <EnvelopeIcon size={40} />
                <div className="flex flex-row justify-center items-start gap-1">
                  <a
                    href="mailto:info@ranwebdesign.xyz"
                    className="font-semibold text-white"
                  >
                    info@ranwebdesign.xyz
                  </a>
                  <UpRightArrowIcon size={10} color={"#FFF"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
