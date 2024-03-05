import React from "react";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-container">
      <ul className="nav-links left">
        <li>Home</li>
        <li>Features</li>
      </ul>
      <ul className="nav-links right">
        <li><button>Sign up</button></li>
        <li><button>Login</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;