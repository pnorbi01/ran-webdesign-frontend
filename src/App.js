import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Application from "./pages/Application";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobile" element={<Application />} />
          <Route path="/skills" element={<Skills />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
