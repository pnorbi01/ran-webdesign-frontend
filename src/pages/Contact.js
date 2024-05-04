import React from "react";
import contactHeadline from "../assets/images/contact-headline-image.png";
import bgImage from "../assets/images/bgImage.webp";
import {
  MobileIcon,
  EnvelopeIcon,
  UpRightArrowIcon,
} from "../assets/icons/Icons";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/logo.png";
import contactCardImg from "../assets/images/contact-card-img.png";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] gap-5 mt-20 z-10">
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
        <h1 className="font-bold xs:text-5xl xsm:text-6xl md:text-7xl text-white text-center xs:w-[90%] md:w-[70%]">
          We are here for you*
        </h1>
        <p className="text-[#8b98a5] text-xl text-center xs:w-[80%] lg:w-[60%]">
          Feel free to contact us, we're happy to help you!
        </p>
        <div className="flex flex-row justify-center items-center w-28 h-10">
          <div className="flex flex-row justify-center items-center relative w-full h-full">
            <a
              href="https://www.facebook.com/profile.php?id=61552789026395"
              className="flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-0 top-0 border-2 border-[#363541] z-20"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="xl"
                className="text-[#65646b] hover:cursor-pointer w-full h-full"
              />
            </a>
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-8 top-0 border-2 border-[#363541] z-10">
              <img
                src={logo}
                width={25}
                height={25}
                loading="lazy"
                alt="RAN Webdesign logo"
              />
            </div>
            <a
              href="https://twitter.com/RANWebdesign"
              className="flex justify-center items-center h-12 w-12 rounded-full bg-[#0e0e1b] absolute left-16 top-0 border-2 border-[#363541] z-0"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size="xl"
                className="text-[#65646b] hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        <span className="text-white/70 font-normal text-xs">
          Reach us on our social media platforms
        </span>
      </div>
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] my-10 z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717a] font-extrabold xs:text-3xl md:text-5xl text-center pb-1">
          Become our partner
        </span>
        <div className="flex flex-col justify-center items-flex-start mt-10 xs:w-full 2xl:w-3/5">
          <div className="flex flex-row justify-between items-start xs:flex-wrap md:flex-nowrap xs:gap-0 md:gap-5 bg-[#ffffff0d] backdrop-blur rounded-t-2xl w-full">
            <div className="flex flex-col justify-start items-start xs:w-full md:w-1/2 gap-3 p-5 ">
              <MobileIcon size={40} />
              <span className="text-[#c1bfc7] font-semibold text-lg">
                Reach us through mobile
              </span>
              <a
                href="tel:+381606191925"
                className="flex flex-row justify-center items-start gap-1 p-3 rounded-lg bg-[#5860CF] btn-shadow hover:cursor-pointer xs:w-full md:w-auto"
              >
                <span className="font-normal text-md text-white">
                  +381 60 619 1925
                </span>
                <UpRightArrowIcon size={10} color={"#FFF"} />
              </a>
            </div>
            <div className="flex flex-col justify-start items-start xs:w-full md:w-1/2 gap-3 p-5 ">
              <EnvelopeIcon size={40} />
              <span className="text-[#c1bfc7] font-semibold text-lg">
                Reach us through e-mail
              </span>
              <a
                href="mailto:info@ranwebdesign.xyz"
                className="flex flex-row justify-center items-start gap-1 p-3 rounded-lg bg-[#5860CF] btn-shadow hover:cursor-pointer xs:w-full md:w-auto"
              >
                <span className="font-normal text-md text-white">
                  info@ranwebdesign.xyz
                </span>
                <UpRightArrowIcon size={10} color={"#FFF"} />
              </a>
            </div>
          </div>
          <div className="w-full rounded-b-2xl">
            <img
              src={contactCardImg}
              alt="Contact us"
              loading="lazy"
              className="rounded-b-2xl w-full"
            />
          </div>
        </div>
      </div>
      <img
        src={bgImage}
        alt="BG"
        loading="lazy"
        className="bg fixed top-0 right-0 bottom-0 h-full w-full object-cover object-center overflow-clip opacity-60 z-0"
        sizes="calc(50vw - 40px)"
        decoding="async"
      />
    </section>
  );
}

export default Contact;
