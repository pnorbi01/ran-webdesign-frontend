import React from "react";
import { useTranslation } from 'react-i18next';

function About() {

  const [t, i18n] = useTranslation('global');

  return (
    <section className="about flex w-full flex-row justify-center items-center text-slate-100 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-3">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                <div className="pseudo-element-about before:content-['1'] absolute py-2 px-4 -top-8 text-white rounded-full font-bold"></div>
                <div className="about-pseudo-line before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-primary-500"></div>
                <h3 className="about-section-title font-extrabold text-xl text-center">{t('about.section-title')}</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-3xl text-center">{t('about.description-title')}</h1>
                <span className="description text-gray-400 font-normal text-base text-center">{t('about.description-first-part')} <span className="description-element font-bold">{t('title.company-name')}</span>{t('about.description-last-part')}</span>
            </div>
        </div>
    </section>
  );
}

export default About;
