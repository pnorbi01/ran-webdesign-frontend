import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faPhp, faJava, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';

function Skill() {

    const [t, i18n] = useTranslation('global');

    return (
    <section className="skill flex w-full flex-row justify-center items-center text-slate-100 flex-wrap mt-20">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-5">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                <div className="pseudo-element-skill before:content-['2'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold"></div>
                <div className="skill-pseudo-line before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-secondary-500"></div>
                <h3 className="skill-section-title font-extrabold text-xl text-center">{t('skill.section-title')}</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-3xl text-center">{t('skill.description-title')}</h1>
                <span className="description text-gray-400 font-normal text-base text-center">{t('skill.description')}</span>
            </div>
            <div className="flex flex-row justify-center items-flex-start gap-4 w-full p-5 flex-wrap">
                <div className="frontend-tool tool flex flex-col justify-flex-start items-center p-4 w-1/4 rounded-3xl shadow-lg shadow-slate-900/[.5]">
                    <div className="flex flex-row justify-center items-center flex-wrap w-full h-1/2 gap-1">
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faReact} size="2xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faJsSquare} size="2xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faHtml5} size="2xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faCss3Alt} size="2xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full h-1/2">
                        <div className="flex flex-row justify-start items-start w-auto h-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512">
                                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="#333" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start items-start w-full h-full px-2 py-1.5">
                            <span className="font-bold text-lg" style={{color: '#333'}}>Frontend</span>
                            <span className="font-normal font-normal text-sm" style={{color: '#96958d'}}>{t('skill.frontend-description')}</span>
                        </div>
                    </div>
                </div>
                <div className="backend-tool tool flex flex-col justify-flex-start items-center p-4 w-1/4 rounded-3xl shadow-lg shadow-slate-900/[.5]">
                    <div className="flex flex-row justify-center items-center flex-wrap w-full h-1/2 gap-1">
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faPhp} size="xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faJava} size="2xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                        <div className="skill-icon-inner flex flex-row justify-center items-center w-11 h-11 bg-foreground/50">
                            <FontAwesomeIcon icon={faNodeJs} size="2xl" className="skill-icon hover:cursor-pointer hover:text-primary/40 transition-all" /> 
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full h-1/2">
                        <div className="flex flex-row justify-start items-start w-auto h-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                                <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" fill="#333"/>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start items-start w-full h-full px-2 py-1.5">
                            <span className="font-bold text-lg" style={{color: '#333'}}>Backend</span>
                            <span className="font-normal font-normal text-sm" style={{color: '#96958d'}}>{t('skill.backend-description')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skill;
