import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import contact from "../assets/images/contact.png";

function Contact() {
  return (
    <section className="flex flex-row justify-center items-center w-full">
      <div className="contact platform flex flex-col justify-start items-center xs:w-full md:w-[70%] xs:rounded-none md:rounded-[3rem] min-h-[680px] my-24 p-10 gap-5 relative">
        <img
          src={contact}
          width={450}
          height={300}
          loading="lazy"
          alt="Get in touch with us"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold text-5xl text-center">
          Get in touch with us.
        </h1>
        <span className="text-[#8b98a5] font-normal text-base text-center xs:w-full sm:w-[80%] md:w-[80%] lg:w-[60%]">
          Do you have a project idea? Feel free to contact us either on phone or
          via email. We will reply within 1 day.
        </span>
        <div className="flex flex-row justify-center items-center xs:flex-wrap md:flex-nowrap gap-5">
          <div className="group flex flex-row justify-center items-center p-2 px-10 rounded-full bg-[#00eebe4f] gap-2 hover:cursor-pointer">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#71717a] to-white to-[50%] font-bold">
              Via phone
            </span>
            <HiArrowNarrowRight className="text-slate-200 group-hover:translate-x-[3px] transition-all" />
          </div>
          <div className="group flex flex-row justify-center items-center p-2 px-10 rounded-full bg-[#00eebe4f] gap-2 hover:cursor-pointer">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#71717a] to-white to-[50%] font-bold">
              Via email
            </span>
            <HiArrowNarrowRight className="text-slate-200 group-hover:translate-x-[3px] transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
