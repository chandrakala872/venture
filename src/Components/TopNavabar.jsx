import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css'; // Import custom CSS styles

const TopNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Virture center </h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/careers" className="nav-link">Careers</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <Link to="/googleform">
          <button className="nav-button" >incubate with us</button>
        </Link>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;


