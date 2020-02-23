import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import MovieTicketing from './pages/movie-ticketing-app';
import Tones from './pages/tone';
import ExpenseTracker from './pages/expense-tracker';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a href="/about" className="navbar-item">
                About
              </a>
              <a href="/about" className="navbar-item">
                About
              </a>
              <div
                className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
              <div className="navbar-start">
                <a href="/" className="navbar-item">
                  Home
                </a>
                <a href="/movie-ticketing-app" className="navbar-item">
                  Movie Ticketing App
                </a>
                <a href="/tone" className="navbar-item">
                  Tones Synth
                </a>
                <a href="/expense-tracker" className="navbar-item">
                  Expense Tracker
                </a>
              </div>
              <div className="navbar-end">
                <a href="https://louiefitzpatrick.com" className="navbar-item">
                  LouieFitzpatrick.com
                </a>
                <a href="https://github.com/Fitzpa" className="navbar-item">
                  Github
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie-ticketing-app" component={MovieTicketing} />
          <Route exact path="/tone" component={Tones} />
          <Route exact path="/expense-tracker" component={ExpenseTracker} />
        </Switch>
        <footer className="footer">
          <div className="container">
            <h4 className="footer-signature">
              {' '}
              © {new Date().getFullYear()}, Created by{' '}
              <span className="signature">Louie Fitzpatrick</span>
            </h4>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
