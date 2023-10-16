import React from "react";
import mobileApp from "./images/mobile-app.png";

function Application() {
  return (
    <section className="application flex w-full flex-row justify-center items-center text-slate-100 flex-wrap">
        <div className="flex flex-row justify-center items-center gap-2 w-full p-3 flex-wrap">
            <div className="content flex flex-col justify-center items-flex-start gap-2 w-1/3 p-5">
                <h3 className="text-blue-500 uppercase font-bold text-sm text-left">Mobile application</h3>
                <h1 className="description-title text-gray-500 font-bold text-5xl text-left">Design your custom mobile app with us.</h1>
                <span className="description text-gray-400 font-medium text-base text-left">When you choose to design your mobile app with us, you're not just getting a product; you're getting a collaborative partner. Partner with us to design and develop your custom mobile app in React Native. Let's turn your vision into a reality!</span>
            </div>
            <div className="mobile-image flex flex-row justify-center items-center gap-2 w-1/2 p-5">
              <img src={mobileApp} alt="mobileAppImg" className="object-contain" />
            </div>
        </div>
    </section>
  );
}

export default Application;
