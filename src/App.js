import React, { useEffect } from 'react';
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Feature from "./Feature";
import Application from "./Application";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";
import { useTranslation } from 'react-i18next';

function App() {

  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    document.title = t('title.company');
    //sessionStorage.clear();
  }, [t]);

  return (
    <>
      <NavBar />
      <div className="h-screen">
        <Hero />
      </div>
      <About />
      <Skill />
      <Feature />
      <Application />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
