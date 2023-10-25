import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMicrophoneAlt, faLocationCrosshairs, faBrain } from '@fortawesome/free-solid-svg-icons';

function Feature() {
  return (
    <section className="feature flex w-full flex-row justify-center items-center text-slate-100 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-5">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5">
                <h3 className="section-title font-extrabold text-2xl text-center">Build faster</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-4xl text-center">Why should you choose us?</h1>
                <span className="description text-gray-400 font-normal text-base text-center">We'll list a few key principles to explain why it's worth entrusting your future project to us. Our team has a proven track record of delivering successful projects on time and within budget, and we are committed to providing top-notch expertise and personalized service to ensure your project's success.</span>
            </div>
            <div className="flex flex-row justify-center items-flex-start gap-4 w-full p-5 flex-wrap">
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11">
                        <FontAwesomeIcon icon={faShieldAlt} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div>
                    <h3 className="uppercase font-bold text-base text-center">Security</h3>
                    <span className="text-gray-500 text-base text-center">As a web development company, we prioritize safety and security. Our commitment to excellence extends to ensuring the safety of your data and online presence.</span>
                </div>
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11">
                        <FontAwesomeIcon icon={faMicrophoneAlt} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div>                 
                    <h3 className="uppercase font-bold text-base text-center">Easy communication</h3>
                    <span className="text-gray-500 text-base text-center">Open lines of communication at every step! We appreciate a smooth operation. That's why we always pay special attention to our clients' needs and feedback.</span>
                </div>
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11">
                        <FontAwesomeIcon icon={faLocationCrosshairs} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div>   
                    <h3 className="uppercase font-bold text-base text-center">Precision</h3>
                    <span className="text-gray-500 text-base text-center">We appreciate craftsmanship and consistently strive to achieve it. We pay meticulous attention to even the smallest details.</span>
                </div>
                <div className="tool flex flex-col justify-flex-start items-center p-5 w-1/4 gap-2 rounded-3xl hover:cursor-pointer transition-all">
                    <div className="icon-inner flex flex-row justify-center items-center w-11 h-11">
                        <FontAwesomeIcon icon={faBrain} size="2xl" className="feature-icon hover:cursor-pointer" style={{color: "#3B82F6"}} /> 
                    </div> 
                    <h3 className="uppercase font-bold text-base text-center">Modern technologies</h3>
                    <span className="text-gray-500 text-base text-center">We are passionate about new technologies and continually keep pace in this ever-evolving industry.</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Feature;
