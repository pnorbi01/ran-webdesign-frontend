import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import logo from "../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col justify-center items-center w-full gap-10 mt-24">
      <div className="flex flex-row justify-center items-flex-start xs:justify-start md:justify-center xs:flex-wrap md:flex-nowrap gap-10 xs:w-[90%] md:w-full lg:w-[90%]">
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <span className="text-[11px] font-semibold leading-6 text-[#8690a3d9]">
              Company
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="/mobile"
                className="text-[13px] font-semibold leading-6 text-[#0d2247]"
              >
                Mobile application
              </a>
              <HiArrowSmRight className="text-[#0d2247] group-hover:translate-x-[3px] transition-all" />
            </div>
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="/contact"
                className="text-[13px] font-semibold leading-6 text-[#0d2247]"
              >
                Contact
              </a>
              <HiArrowSmRight className="text-[#0d2247] group-hover:translate-x-[3px] transition-all" />
            </div>
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="/skills"
                className="text-[13px] font-semibold leading-6 text-[#0d2247]"
              >
                Skills
              </a>
              <HiArrowSmRight className="text-[#0d2247] group-hover:translate-x-[3px] transition-all" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <span className="text-[11px] font-semibold leading-6 text-[#8690a3d9]">
              Services
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="text-[13px] font-semibold leading-6 text-[#0d2247]">
              Mobile app development
            </span>
            <span className="text-[13px] font-semibold leading-6 text-[#0d2247]">
              Web development
            </span>
            <span className="text-[13px] font-semibold leading-6 text-[#0d2247]">
              Maintenance
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <span className="text-[11px] font-semibold leading-6 text-[#8690a3d9]">
              Contact Us
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="mailto:info@ranwebdesign.xyz"
                className="text-[13px] font-semibold leading-6 text-[#0d2247]"
              >
                info@ranwebdesign.xyz
              </a>
              <HiArrowSmRight className="text-[#0d2247] group-hover:translate-x-[3px] transition-all" />
            </div>
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="tel:+381606191925"
                className="text-[13px] font-semibold leading-6 text-[#0d2247]"
              >
                Make a call
              </a>
              <HiArrowSmRight className="text-[#0d2247] group-hover:translate-x-[3px] transition-all" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start xs:flex-col xs:items-center md:items-start md:flex-row xs:gap-3 md:gap-0 w-[70%] mb-10 pt-10 border-t-1 border-blue-900/1">
        <span className="text-[11px] font-semibold leading-6 text-[#8690a3d9]">
          © {currentYear} RAN Webdesign.
        </span>
        <img src={logo} width={35} height={35} alt="RAN Webdesign logo" />
        <div className="flex flex-row justify-center items-center gap-2">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="lg"
            className="text-[#8690a3d9] hover:scale-110 hover:cursor-pointer transition-all"
          />
          <hr className="h-4 w-px bg-blue-900/30" />
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            className="text-[#8690a3d9] hover:scale-110 hover:cursor-pointer transition-all"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
