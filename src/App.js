import React from "react";
import "./App.css";
import Application from "./Application";
import Feature from "./Feature";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Service from "./Service";

function App() {
  return (
    <>
      <NavBar />
      <div className="h-screen">
        <Hero />
      </div>
      <Feature />
      <Application />
      <Service />
    </>
  );
}

export default App;
{
  /* <Skill /> */
}
