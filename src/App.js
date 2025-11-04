import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <Skills />
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;