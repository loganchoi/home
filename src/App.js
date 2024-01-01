import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Work from "./components/Work/work";
import Contacts from "./components/Contacts/contacts";
import clouds from "./assets/clouds.mp4";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Background video */}
        <video className="background-video" autoPlay loop muted>
          <source src={clouds} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
