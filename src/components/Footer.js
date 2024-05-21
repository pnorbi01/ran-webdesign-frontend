import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col justify-center items-center w-full gap-10 mt-24">
      <div className="flex flex-row justify-center items-flex-start xs:justify-start md:justify-center xs:flex-wrap md:flex-nowrap gap-10 xs:w-[90%] md:w-full lg:w-[90%] z-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <span className="text-[11px] font-semibold leading-6 text-[#8b98a5]">
              Company
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="group flex flex-row justify-center items-center gap-1">
              <Link
                to="/mobile"
                className="text-[13px] font-semibold leading-6 text-[#65646b]"
              >
                Mobile application
              </Link>
              <HiArrowSmRight className="text-[#65646b] group-hover:translate-x-[3px] transition-all" />
            </div>
            <div className="group flex flex-row justify-center items-center gap-1">
              <Link
                to="/contact"
                className="text-[13px] font-semibold leading-6 text-[#65646b]"
              >
                Contact
              </Link>
              <HiArrowSmRight className="text-[#65646b] group-hover:translate-x-[3px] transition-all" />
            </div>
            <div className="group flex flex-row justify-center items-center gap-1">
              <Link
                to="/home"
                className="text-[13px] font-semibold leading-6 text-[#65646b]"
              >
                Home
              </Link>
              <HiArrowSmRight className="text-[#65646b] group-hover:translate-x-[3px] transition-all" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <span className="text-[11px] font-semibold leading-6 text-[#8b98a5]">
              Services
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="text-[13px] font-semibold leading-6 text-[#65646b]">
              Mobile app development
            </span>
            <span className="text-[13px] font-semibold leading-6 text-[#65646b]">
              Web development
            </span>
            <span className="text-[13px] font-semibold leading-6 text-[#65646b]">
              Maintenance
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <span className="text-[11px] font-semibold leading-6 text-[#8b98a5]">
              Contact Us
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="mailto:info@ranwebdesign.xyz"
                className="text-[13px] font-semibold leading-6 text-[#65646b]"
              >
                info@ranwebdesign.xyz
              </a>
              <HiArrowSmRight className="text-[#65646b] group-hover:translate-x-[3px] transition-all" />
            </div>
            <div className="group flex flex-row justify-center items-center gap-1">
              <a
                href="tel:+381606191925"
                className="text-[13px] font-semibold leading-6 text-[#65646b]"
              >
                Make a call
              </a>
              <HiArrowSmRight className="text-[#65646b] group-hover:translate-x-[3px] transition-all" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start xs:flex-col xs:items-center md:items-start md:flex-row xs:gap-3 md:gap-0 w-[80%] mb-10 pt-10 border-t-1 border-[#f3eeff1f] z-10">
        <span className="text-[11px] font-semibold leading-6 text-[#65646b]">
          © {currentYear} RAN Webdesign.
        </span>
        <img src={logo} width={35} height={35} alt="RAN Webdesign logo" />
        <div className="flex flex-row justify-center items-center gap-2">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="lg"
            className="text-[#65646b] hover:scale-110 hover:cursor-pointer transition-all"
          />
          <hr className="h-4 w-px bg-[#65646b]" />
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            className="text-[#65646b] hover:scale-110 hover:cursor-pointer transition-all"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
