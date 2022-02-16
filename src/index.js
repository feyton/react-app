import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';

import { App } from './App.jsx';
import NotFound from './pages/404.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Work from './pages/Work.jsx';
import './styles.scss';
import './components/styles/hero.scss';

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" element={<App />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="*" element={<NotFound />} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById('root'));
