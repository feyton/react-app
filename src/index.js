import React from 'react';
import './styles/_custom.scss';

import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ToastContainer } from 'react-toastify';
import { App } from './App.jsx';
import NotFound from './pages/404.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Work from './pages/Work.jsx';
import './styles/main.css';
import './styles/hero.scss';
import './styles/nav.css';
import { store } from './config/store.js';
import 'react-toastify/dist/ReactToastify.css';

const appRouting = (
  <Provider store={store}>
    <div className="container-fluid px-0 overflow-hidden">
      <Router>
        <Switch>
          <Route exact path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  </Provider>
);

ReactDOM.render(appRouting, document.getElementById('root'));
