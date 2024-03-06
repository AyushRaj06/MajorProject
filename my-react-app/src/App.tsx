import './App.css';
import React from 'react';
import NavBar from './components/nav/NavBar'
import Hero from './Pages/Hero';
import About from './Pages/About';
import IDE from './Pages/IDE';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <About />
      <IDE />
      <Contact />
    </>
  );
}

export default App;
