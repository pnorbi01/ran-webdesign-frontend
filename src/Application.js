import React from "react";
import mobileApp from "./images/mobile-app.png";
import { useTranslation } from 'react-i18next';

function Application() {

  const [t, i18n] = useTranslation('global');

  return (
    <section className="application flex w-full flex-row justify-center items-center text-slate-100 flex-wrap">
        <div className="app-descr flex flex-row justify-center items-center gap-2 w-1/3 p-3 flex-wrap z-10">
            <div className="content flex flex-col justify-center items-flex-start gap-2 p-5">
                <h3 className="section-title font-extrabold text-xl text-left">{t('application.section-title')}</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-3xl text-left">{t('application.description-title')}</h1>
                <span className="description text-gray-400 font-normal text-base text-left">{t('application.description-first-part')}<span className="description-element font-bold">{t('application.technology')}</span>{t('application.description-last-part')}</span>
            </div>
        </div>
        <div className="mobile-image flex flex-row justify-end items-center gap-2 w-1/2 p-5">
          <img src={mobileApp} alt="mobileAppImg" className="object-contain" />
        </div>
    </section>
  );
}

export default Application;
