import React from "react";

function About() {
  return (
    <section className="about flex w-full flex-row justify-center items-center text-slate-100 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-3">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5">
                <h3 className="text-blue-500 uppercase font-bold text-sm text-center">About us</h3>
                <h1 className="description-title text-gray-500 font-bold text-5xl text-center">Who we are?</h1>
                <span className="description text-gray-400 font-medium text-base text-center">We are RAN Webdesign, a passionate team dedicated to crafting modern websites. Since our inception, we have been committed to delivering outstanding and innovative solutions in the online realm to our partners.</span>
            </div>
        </div>
    </section>
  );
}

export default About;
