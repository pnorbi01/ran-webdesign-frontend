import React from "react";
import css from "./images/css.png";
import html from "./images/html.png";
import react from "./images/react.png";
import js from "./images/js.png";
import php from "./images/php.png";
import java from "./images/java.png";
import backend from "./images/backend.png";
import frontend from "./images/frontend.png";

function Skill() {
  return (
    <section className="skill flex w-full flex-row justify-center items-center text-slate-100 flex-wrap mt-20">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-5">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                <div className="pseudo-element-skill before:content-['2'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold"></div>
                <div className="skill-pseudo-line before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-secondary-500"></div>
                <h3 className="skill-section-title font-extrabold text-2xl text-center">Skills</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-4xl text-center">Let us introduce our skills</h1>
                <span className="description text-gray-400 font-normal text-base text-center">We offer a wide range of skills to meet your specific needs. Our dedicated team is here to assist you in achieving your goals and making your online presence a success.</span>
            </div>
            <div className="flex flex-row justify-center items-flex-start gap-4 w-full p-5 flex-wrap">
                <div className="frontend-tool tool flex flex-col justify-flex-start items-center p-4 w-1/4 rounded-3xl shadow-lg shadow-slate-900/[.5]">
                    <img src={frontend} alt="frontendImg" />
                    <h3 className="tool-title text-blue-500 uppercase font-bold text-base text-center">Front-End tools</h3>
                    <span className="text-gray-500 text-base text-center">Explore the frontend tools that we use.</span>
                    <div className="flex flex-row justify-center items-center gap-2 w-full p-5 flex-wrap">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <img src={react} alt="reactIcon" className="grayscale hover:grayscale-0 hover:cursor-pointer transition-all" width={40} height={40} />
                            <span className="text-gray-500 text-xs text-center">React</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <img src={js} alt="jsIcon" className="grayscale hover:grayscale-0 hover:cursor-pointer transition-all" width={40} height={40} />
                            <span className="text-gray-500 text-xs text-center">JavaScript</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <img src={html} alt="htmlIcon" className="grayscale hover:grayscale-0 hover:cursor-pointer transition-all" width={40} height={40} />
                            <span className="text-gray-500 text-xs text-center">HTML</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <img src={css} alt="cssIcon" className="grayscale hover:grayscale-0 hover:cursor-pointer transition-all" width={40} height={40} />
                            <span className="text-gray-500 text-xs text-center">CSS</span>
                        </div>
                    </div>
                </div>
                <div className="backend-tool tool flex flex-col justify-flex-start items-center p-4 bg-gradient-to-r from-[#FFE1E0] via-[#C2BFF3] to-[#AAD2FF] w-1/4 rounded-3xl shadow-lg shadow-slate-900/[.5]">
                    <img src={backend} alt="backendImg" />
                    <h3 className="tool-title text-blue-500 uppercase font-bold text-base text-center">Back-End tools</h3>
                    <span className="text-gray-500 text-base text-center">Explore the backend tools that we use.</span>
                    <div className="flex flex-row justify-center items-center gap-2 w-full p-5 flex-wrap">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <img src={java} alt="javaIcon" className="grayscale hover:grayscale-0 hover:cursor-pointer transition-all" width={40} height={40} />
                            <span className="text-gray-500 text-xs text-center">Java</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <img src={php} alt="phpIcon" className="grayscale hover:grayscale-0 hover:cursor-pointer transition-all" width={40} height={40} />
                            <span className="text-gray-500 text-xs text-center">PHP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skill;
