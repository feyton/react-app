import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404.css';

function NotFound() {
  return (
    <>
      <div className="container-fluid fixed fl-screen">
        <div class="number">404</div>
        <div class="text">
          <span>Ooops...</span>
          <br />
          Page Not Found
        </div>
        <Link className="me" to="/">
          Go Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
