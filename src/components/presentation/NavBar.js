import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text">Movies Catalogue</a>
          </div>
          <ul className="navbar-nav ml-auto"></ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
