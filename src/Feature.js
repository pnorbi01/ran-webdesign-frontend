import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMicrophoneAlt, faLocationCrosshairs, faBrain } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Feature() {

    const [t, i18n] = useTranslation('global');

    return (
    <section className="feature flex w-full flex-row justify-center items-center text-slate-100 flex-wrap relative">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-5 z-10">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5">
                <h3 className="section-title font-extrabold text-xl text-center">{t('feature.section-title')}</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-3xl text-center">{t('feature.description-title')}</h1>
                <span className="description text-gray-400 font-normal text-base text-center">{t('feature.description')}</span>
            </div>
            <div className="flex flex-row justify-center items-flex-start gap-4 w-full p-5 flex-wrap">
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11 bg-primary/10">
                        <FontAwesomeIcon icon={faShieldAlt} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div>
                    <h3 className="uppercase font-bold text-base text-center">{t('feature.security')}</h3>
                    <span className="text-gray-500 text-base text-center">{t('feature.security-description')}</span>
                </div>
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11 bg-primary/10">
                        <FontAwesomeIcon icon={faMicrophoneAlt} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div>                 
                    <h3 className="uppercase font-bold text-base text-center">{t('feature.communication')}</h3>
                    <span className="text-gray-500 text-base text-center">{t('feature.communication-description')}</span>
                </div>
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11 bg-primary/10">
                        <FontAwesomeIcon icon={faLocationCrosshairs} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div>   
                    <h3 className="uppercase font-bold text-base text-center">{t('feature.precision')}</h3>
                    <span className="text-gray-500 text-base text-center">{t('feature.precision-description')}</span>
                </div>
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer z-10 transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11 bg-primary/10">
                        <FontAwesomeIcon icon={faBrain} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div> 
                    <h3 className="uppercase font-bold text-base text-center">{t('feature.technologies')}</h3>
                    <span className="text-gray-500 text-base text-center">{t('feature.technologies-description')}</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Feature;
