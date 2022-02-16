import React from 'react';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

export function App() {
  return (
    <div className="container-fluid pl-1 lr-1">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
