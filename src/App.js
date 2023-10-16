import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Feature from "./Feature";
import Application from "./Application";
import "./App.css";

function App() {
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
    </>
  );
}

export default App;
