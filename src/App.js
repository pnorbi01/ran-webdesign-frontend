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
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ScrollToTop from "./components/helper/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobile" element={<Application />} />
          <Route path="/contact" element={<Contact />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
