import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="#" className="navbar-item">
              Thing One
            </a>
            <a href="#" className="navbar-item">
              Thing Two
            </a>
            <a href="#" className="navbar-item">
              Thing Three
            </a>
            <div className="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a href="#" className="navbar-item">
                one
              </a>
              <a href="#" className="navbar-item">
                two
              </a>
              <a href="#" className="navbar-item">
                three
              </a>
              <a href="#" className="navbar-item">
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
      {children}
      <footer className="footer">
        <div className="container">
          <h4 className="footer-signature">
            {' '}
            © {new Date().getFullYear()}, Created by{' '}
            <span className="signature">Louie Fitzpatrick</span>
          </h4>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
