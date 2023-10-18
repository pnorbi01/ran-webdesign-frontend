import React from "react";

function About() {
  return (
    <section className="about flex w-full flex-row justify-center items-center text-slate-100 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-3">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                <div className="pseudo-element-about before:content-['1'] absolute p-2 px-4 -top-8 text-white rounded-full font-bold"></div>
                <div className="about-pseudo-line before:content-[''] absolute -top-12 h-4 w-0.5 bg-primary-500"></div>
                <h3 className="about-section-title font-extrabold text-2xl text-center">About</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-4xl text-center">Who we are?</h1>
                <span className="description text-gray-400 font-normal text-base text-center">We are RAN Webdesign, a passionate team dedicated to crafting modern websites. Since our inception, we have been committed to delivering outstanding and innovative solutions in the online realm to our partners.</span>
            </div>
        </div>
    </section>
  );
}

export default About;
