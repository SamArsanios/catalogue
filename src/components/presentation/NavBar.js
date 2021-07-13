import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav className="navbar navbar-light bg-dark mb-5">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand text-white text-lg brand-text" to="/">Movies Catalogue</Link>
        </div>
        <ul className="navbar-nav ml-auto" />
      </div>
    </nav>
  </div>
);

export default NavBar;
