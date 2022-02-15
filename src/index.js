import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';

import { App } from './App.jsx';
import './styles.scss';

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" element={<App />} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById('root'));
