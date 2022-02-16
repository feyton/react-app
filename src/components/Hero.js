import React from 'react'
import "./styles/hero.scss"

function Hero() {
  return (
    <div className="hero-div">
      <div className="hero-text">
        <h3>Your Dream</h3>
        <h2>Made a reality</h2>
      </div>

      <button className="btn-explore all-caps">Explore</button>
    </div>
  );
}

export default Hero;
