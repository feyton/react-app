import React from 'react';

function Hero() {
  return (
    <>
      <div className="hero-div vh-100 d-flex justify-content-center align-items-center flex-column">
        <div className="hero-text d-flex flex-column py-4 text-center">
          <h2 className="text-primary font-weight-bold">Your Dream</h2>
          <h3 className="text-secondary">Made a reality</h3>
        </div>

        <button className="btn btn-primary rounded px-3 text-uppercase">
          Explore
        </button>
      </div>
    </>
  );
}

export default Hero;
