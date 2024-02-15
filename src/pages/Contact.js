import { Link } from "@nextui-org/react";
import React from "react";
import { HiArrowNarrowRight, HiMail, HiPhone } from "react-icons/hi";
import contactHeadline from "../assets/images/contact-headline-image.png";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <div className="flex flex-col justify-center items-center gap-2 relative">
          <span
            className="animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 w-12 h-[1px] bg-[#86FAE7] absolute -right-10 transform -translate-y-[50%]"
            style={{ animationDelay: "2s", animationFillMode: "forwards" }}
          ></span>
          <div
            className="flex flex-row justify-center items-center animate-[fadeInRight_0.5s_ease-in-out] opacity-0 w-10 h-10 rounded-full bg-[#86FAE7] absolute -right-16 transform -translate-y-[50%]"
            style={{ animationDelay: "2.3s", animationFillMode: "forwards" }}
          >
            <HiPhone
              className="text-[#1d1d1f] h-5 w-5 animate-[fadeIn_0.5s_ease-in-out] opacity-0"
              style={{ animationDelay: "2.8s", animationFillMode: "forwards" }}
            />
          </div>
          <span
            className="animate-[fadeInRight_0.5s_ease-in-out] opacity-0 w-12 h-[1px] bg-[#ACB7E5] absolute -left-10 transform -translate-y-[50%]"
            style={{ animationDelay: "2s", animationFillMode: "forwards" }}
          ></span>
          <div
            className="flex flex-row justify-center items-center animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 w-10 h-10 rounded-full bg-[#ACB7E5] absolute -left-16 transform -translate-y-[50%]"
            style={{ animationDelay: "2.3s", animationFillMode: "forwards" }}
          >
            <HiMail
              className="text-[#1d1d1f] h-5 w-5 animate-[fadeIn_0.5s_ease-in-out] opacity-0"
              style={{ animationDelay: "2.8s", animationFillMode: "forwards" }}
            />
          </div>
          <img
            src={contactHeadline}
            loading="lazy"
            alt="Contact headline"
            className="xs:animate-[scaleDownMobile_2s_ease-in-out] md:animate-[scaleDown_2s_ease-in-out] opacity-0 w-[70px] h-[70px] drop-shadow-lg transition-all"
            style={{
              animationDuration: "1.8s",
              animationFillMode: "forwards",
            }}
          />
        </div>
        <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-[#1d1d1f] text-center xs:w-[90%] md:w-[70%]">
          We are here for you.
        </h1>
        <p className="font-bold text-[#8b98a5] text-center xs:w-[80%] lg:w-[35%]">
          Feel free to contact us either on phone or via email. We will reply
          within 1 day.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap xs:w-full xsl:w-3/4 my-20 gap-10">
        <div
          className="group flex flex-col justify-between items-center bg-[#fafafc] min-h-[250px] py-5 px-10 gap-5 xs:rounded-none xsl:rounded-[2rem] animate-[fadeInLeft_0.5s_ease-in-out] opacity-0 hover:cursor-pointer"
          style={{
            animationDelay: "3s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-[#ACB7E5] rounded-[1.5rem] group-hover:bg-white transition-all">
              <HiMail className="text-white h-10 w-10 group-hover:text-[#ACB7E5] transition-all" />
            </div>
            <span className="font-bold text-xl text-[#1d1d1f]">
              Through e-mail
            </span>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <p className="font-bold text-md text-[#1d1d1f]">
              Use e-mail to contact us any time!
            </p>
            <Link
              href="mailto:info@ranwebdesign.xyz"
              className="group flex flex-row justify-center items-center gap-2 hover:cursor-pointer"
            >
              <span className="text-[#2D7CFC] font-bold">Get in touch</span>
              <HiArrowNarrowRight className="text-[#2D7CFC] group-hover:translate-x-[3px] transition-all" />
            </Link>
          </div>
        </div>
        <div
          className="group flex flex-col justify-between items-center bg-[#fafafc] min-h-[250px] py-5 px-10 gap-5 xs:rounded-none xsl:rounded-[2rem] animate-[fadeInRight_0.5s_ease-in-out] opacity-0 hover:cursor-pointer"
          style={{
            animationDelay: "3s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-[#86FAE7] rounded-[1.5rem] group-hover:bg-white transition-all">
              <HiPhone className="text-white h-10 w-10 group-hover:text-[#86FAE7] transition-all" />
            </div>
            <span className="font-bold text-xl text-[#1d1d1f]">
              Through phone
            </span>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <p className="font-bold text-md text-[#1d1d1f]">
              Use phone to contact us any time!
            </p>
            <Link
              href="tel:+381606191925"
              className="group flex flex-row justify-center items-center gap-2 hover:cursor-pointer"
            >
              <span className="text-[#2D7CFC] font-bold">Get in touch</span>
              <HiArrowNarrowRight className="text-[#2D7CFC] group-hover:translate-x-[3px] transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
