import React from "react";
import Application from "../components/Application";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Service from "../components/Service";

function Home() {
  return (
    <>
      <div className="xs:h-screen md:h-[80vh]">
        <Hero />
      </div>
      <Feature />
      <Application />
      <Service />
      <Contact />
    </>
  );
}

export default Home;
