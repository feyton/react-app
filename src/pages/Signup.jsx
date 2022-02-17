import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../reducers/authReducer.js';

export function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const { email, password, rememberMe } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <>
      <>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5 d-md">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 px-5">
                <form onSubmit={onSubmit}>
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control form-control"
                      placeholder="First name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control form-control"
                      placeholder="Last name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control"
                      placeholder="Your email"
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control form-control"
                      placeholder="Enter password"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="password2">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      className="form-control form-control"
                      placeholder="Confirm password"
                      onChange={onChange}
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary px-2">
                      Register
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{'  '}
                      <Link to="/login" className="link-danger">
                        Login{' '}
                      </Link>{' '}
                      or <Link to="/">Go Back</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mx-auto">
              Copyright © 2020. All rights reserved.
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Signup;
