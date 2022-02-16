import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export function About() {
  return (
    <>
      <div className="container-fluid pl-1 lr-1">
        <Navbar></Navbar>
        <h3>About</h3>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </>
  );
}

export default About;
