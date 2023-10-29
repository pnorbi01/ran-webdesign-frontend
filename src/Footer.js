import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.png";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';

function Footer() {

    const [t, i18n] = useTranslation('global');
    const currentYear = new Date().getFullYear();

    const scrollToContent = (div) => {
        const section = document.querySelector(`${div}`);
        if(section) {
            const yOffset = section.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }
    
    const handleClickOnWeb = (scrollTo, event) => {
        scrollToContent(scrollTo);
        event.preventDefault();
    };

    return (
    <section className="footer flex w-full flex-row justify-center items-center text-slate-100 mt-20">
        <div className="footer-container flex flex-row justify-center items-center gap-2 w-full p-3">
            <div className="footer-card flex flex-col justify-start items-center gap-2 w-1/4 h-52 p-3">
                <div className="footer-header flex flex-row justify-start items-center w-full gap-2">
                    <img src={logo} alt="RAN Webdesign logo" width={30} height={30} />
                    <span className="footer-title font-normal text-xs text-gray-500">© {currentYear}</span>
                </div>
                <div className="footer-body flex flex-row justify-start items-center w-full gap-2 text-gray-500">
                    <a href="https://twitter.com/RANWebdesign"><FontAwesomeIcon icon={faXTwitter} size="lg" className="hover:cursor-pointer" /></a>
                    <a href="https://github.com/pnorbi01"><FontAwesomeIcon icon={faGithub} size="lg" className="hover:cursor-pointer" /></a>
                </div>
            </div>
            <div className="footer-card flex flex-col justify-start items-center gap-2 w-1/4 h-52 p-3">
                <div className="footer-header flex flex-row justify-center items-center gap-2 w-full">
                    <span className="footer-title font-extrabold text-lg">{t('footer.company-card-title')}</span>
                </div>
                <div className="footer-body flex flex-col justify-start items-center gap-2 w-1/2 h-full text-gray-500 text-xs px-3">
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer" onClick={(e) => handleClickOnWeb('.about', e)}>
                        <span>{t('footer.company-card-about')}</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer" onClick={(e) => handleClickOnWeb('.skill', e)}>
                        <span>{t('footer.company-card-skill')}</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer" onClick={(e) => handleClickOnWeb('.feature', e)}>
                        <span>{t('footer.company-card-feature')}</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer" onClick={(e) => handleClickOnWeb('.application', e)}>
                        <span>{t('footer.company-card-app')}</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                    <div className="company-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer" onClick={(e) => handleClickOnWeb('.contact', e)}>
                        <span>{t('footer.company-card-contact')}</span>
                        <FontAwesomeIcon icon={faAngleRight} size="sm" className="arrowFooterIcon transition-all" />
                    </div>
                </div>
            </div>
            <div className="footer-card flex flex-col justify-start items-end gap-2 w-1/4 h-52 p-3">
                <div className="footer-header flex flex-row justify-end items-center gap-2 w-full">
                    <span className="footer-title font-extrabold text-lg">{t('footer.contact-card-title')}</span>
                </div>
                <div className="footer-body flex flex-col justify-start items-end gap-2 w-1/2 h-full text-gray-500 text-xs">
                    <div className="footer-contact-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" className="footerContactIcon transition-all" />
                        <a href="mailto:ranwebdesign@gmail.com"><span>info@ranwebdesign.xyz</span></a>
                    </div>
                    <div className="footer-contact-element flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} size="lg" className="footerContactIcon transition-all" />
                        <a href="tel:+381606191925"><span>+381606191925</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Footer;
