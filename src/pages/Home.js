import React from "react";
import Application from "../components/Application";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Offer from "../components/Offer";

function Home() {
  return (
    <>
      <div className="min-h-min">
        <Hero />
      </div>
      <Service />
      <WhyUs />
      <Application />
      <Offer />
      <Contact />
    </>
  );
}

export default Home;
