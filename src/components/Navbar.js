import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/nav.scss';
const profile_avatar =
  'https://res.cloudinary.com/feyton/image/upload/c_scale,w_30/v1643272521/user_nophzu.png';

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-md bg-light justify-content-between">
      <div className="navbar-brand">
        <Link to="/">
          <h3>Feyton Inc</h3>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ml-2 pr-1">
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : 'none')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item ml-2">
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : 'none')}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item ml-2">
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : 'none')}
              to="/work"
            >
              Our Work
            </NavLink>
          </li>
          <li className="nav-item ml-2">
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : 'none')}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item dropdown ml-5">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={profile_avatar} alt="" className="picture-avatar" />
              <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown ml-2">
            <a
              href="#here"
              className="nav-link dropdown-toggle"
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={profile_avatar} alt="" className="profile-picture" />
              <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li className="dropdown-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="dropdown-item">
                <a
                  href="#logout"
                  className="logout"
                  onClick={(e) => {
                    handleLogout(e);
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
