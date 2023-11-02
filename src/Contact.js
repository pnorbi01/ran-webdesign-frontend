import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Contact() {

  const [t, i18n] = useTranslation('global');

  return (
    <section className="contact flex w-full flex-row justify-center items-center text-slate-100 flex-wrap mt-32">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-3">
              <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                  <div className="pseudo-element-contact before:content-['4'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold"></div>
                  <div className="contact-pseudo-line before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-primary-500"></div>
                  <h3 className="contact-section-title font-extrabold text-2xl text-center">{t('contact.section-title')}</h3>
                  <h1 className="description-title text-gray-800 font-extrabold text-4xl text-center">{t('contact.description-title')}</h1>
                  <span className="description text-gray-400 font-normal text-base text-center">{t('contact.description')}</span>
                  <span className="description text-gray-400 font-normal text-base text-center">{t('contact.description-part')}</span>
              </div>
              <div className="contact-container flex flex-col justify-center items-center w-3/5 rounded-xl divide-y-1 divide-slate-300/25 shadow-2xl">
                <a href="mailto:info@ranwebdesign.xyz" className="flex flex-row justify-between items-center w-full">
                  <div className="contact-element flex flex-row justify-between items-center w-full p-5 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FontAwesomeIcon icon={faEnvelope} size="1x" className="contactIcon" />
                      <span className="description text-gray-100 font-normal text-base text-center">{t('contact.email-text')}</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3">
                      <span className="description text-gray-100 font-normal text-base text-center">info@ranwebdesign.xyz</span>
                      <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrowIcon transition-all" />
                    </div>
                  </div>
                </a>
                <a href="tel:0606191925" className="flex flex-row justify-between items-center w-full">
                  <div className="contact-element flex flex-row justify-between items-center w-full p-5 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FontAwesomeIcon icon={faPhone} size="1x" className="contactIcon" />
                      <span className="description text-gray-100 font-normal text-base text-center">{t('contact.phone-text')}</span>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-3">
                      <span className="description text-gray-100 font-normal text-base text-center">0606191925</span>
                      <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrowIcon transition-all" />
                    </div>
                  </div>
                </a>
              </div>
        </div>
    </section>
  );
}

export default Contact;
