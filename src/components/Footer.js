import React from 'react';
import './styles/footer.scss';

function Footer() {
  const handleClick = () => {
    console.log('clicked ');
  };
  return (
    <footer className="row pt-4">
      <div className="col-sm-12 col-md-4 about">
        <h3>About Us</h3>
        <p>Our goal is to provide you the best we have to offer</p>
        <ul className="al-left">
          <li>
            <a href="tel:+250787241457" class="text-link">
              <span>Call Us:</span> + (250) 787 241 457
            </a>
          </li>
          <li>
            <a href="mailto:info@feyton.co.rw" class="text-link">
              <span>Email:</span> info@fabrice.com
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-4 form">
        <h3>Our NewsLetter</h3>
        <form action="#">
          <div class="input-container">
            <input type="text" placeholder="E-mail" />
            <button type="submit">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="col-sm-12 col-md-4 social">
        <h3>Follow me</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com/feytonf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com/feytonf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/feyton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCfMEXzqST_bQSs0f31_R8NA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
