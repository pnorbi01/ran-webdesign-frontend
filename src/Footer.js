import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <section className="footer flex w-full flex-row justify-center items-center text-slate-100 mt-20">
        <div className="footer-container flex flex-row justify-center items-center gap-2 w-full p-3">
            <div className="footer-card flex flex-col justify-start items-center gap-2 w-1/4 h-52 p-3 relative">
                <div className="footer-header flex flex-row justify-start items-center w-full gap-2">
                    <span className="footer-title font-extrabold text-lg">RAN</span>
                    <span className="footer-title font-normal text-xs text-gray-500">© 2023</span>
                </div>
                <div className="footer-body flex flex-row justify-start items-center w-full gap-2 p-3 absolute bottom-0 text-gray-500">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" className="xIcon hover:cursor-pointer transition-all" />
                </div>
            </div>
            <div className="footer-card flex flex-col justify-start items-center gap-2 w-1/4 h-52 p-3">
                <div className="footer-header flex flex-row justify-center items-center gap-2 w-full">
                    <span className="footer-title font-extrabold text-lg">Company</span>
                </div>
                <div className="footer-body flex flex-col justify-start items-start gap-2 w-1/2 h-full text-gray-500 text-xs px-3">
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <span>About</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <span>Skills</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <span>Features</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <span>Mobile application</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <span>Contact</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                </div>
            </div>
            <div className="footer-card flex flex-col justify-start items-end gap-2 w-1/4 h-52 p-3">
                <div className="footer-header flex flex-row justify-end items-center gap-2 w-full">
                    <span className="footer-title font-extrabold text-lg">Contact</span>
                </div>
                <div className="footer-body flex flex-col justify-start items-end gap-2 w-1/2 h-full text-gray-500 text-xs">
                    <div className="footer-contact-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" className="footerContactIcon transition-all" />
                        <span>ranwebdesign@gmail.com</span>
                    </div>
                    <div className="footer-contact-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} size="lg" className="footerContactIcon transition-all" />
                        <span>+381606191925</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Footer;
