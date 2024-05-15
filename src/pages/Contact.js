import React from "react";
import contactHeadline from "../assets/images/contact-headline-image.png";
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
      <div className="flex flex-col justify-center items-center xs:w-[90%] md:w-[80%] gap-5 mt-20 z-10 relative">
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
        <div className="xs:w-full md:w-2/3 h-[250px] absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full">
            <div
              className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute left-[10%] bottom-0 h-12 w-[1px] bg-white/50"
              style={{
                animationDelay: "3s",
              }}
            ></div>
            <div
              className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute left-[20%] bottom-0 h-12 w-[1px] bg-white/50"
              style={{
                animationDelay: "5s",
              }}
            ></div>
            <div
              className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute left-1/2 bottom-0 h-12 w-[1px] bg-white/50"
              style={{
                animationDelay: "5s",
              }}
            ></div>
            <div
              className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute right-[20%] bottom-0 h-12 w-[1px] bg-white/50"
              style={{
                animationDelay: "6s",
              }}
            ></div>
          </div>
        </div>
        <div className="rising-stars xs:w-full md:w-2/3 h-[250px] absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="animate-[rising_100s_ease-in-out_infinite] w-[2px] h-[2px]"
            style={{
              animationDuration: "100s",
              animationFillMode: "forwards",
            }}
          ></div>
          <div
            className="animate-[rising_100s_ease-in-out_infinite] w-[1px] h-[1px]"
            style={{
              animationDuration: "150s",
              animationFillMode: "forwards",
            }}
          ></div>
          <div
            className="animate-[rising_100s_ease-in-out_infinite] w-[1px] h-[1px]"
            style={{
              animationDuration: "200s",
              animationFillMode: "forwards",
            }}
          ></div>
        </div>
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
      <div className="background-hero">
        <div className="hero-gradient"></div>
      </div>
    </section>
  );
}

export default Contact;
