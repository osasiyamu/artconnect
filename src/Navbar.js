// import React from 'react';
// import './App.css';
// import './PageStyles.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" aria-label="Main navigation">
      <div className="container-fluid">
        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/artconnect/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/discover">Discover</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/community">Community</a>
            </li>
          </ul>
          <a className="navbar-brand mx-auto websiteName" href="/artconnect/" aria-label="ArtConnect Home">ArtConnect</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/cart">My Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/profile" aria-label="Profile">
                <i className="bi bi-person-fill" aria-hidden="true"></i>
                <span className="visually-hidden">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
