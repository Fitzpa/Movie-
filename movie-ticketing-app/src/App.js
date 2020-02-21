import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/index';
import MovieTicketing from './pages/movie-ticketing-app';

function App() {
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
              <div className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                <a href="/" className="navbar-item">
                  Home
                </a>
                <a href="/movie-ticketing-app" className="navbar-item">
                  Movie Ticketing App
                </a>
                <a href="/" className="navbar-item">
                  three
                </a>
                <a href="/" className="navbar-item">
                  four
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
