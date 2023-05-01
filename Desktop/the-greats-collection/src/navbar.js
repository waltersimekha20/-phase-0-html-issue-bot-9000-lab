import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const handleLinkClick = (e) => {
    e.preventDefault();
    // your code to handle the link click event goes here
    console.log(`Link with text "${e.target.textContent}" clicked.`);
  };

  return (
    <nav>
      <h1>THE GREATS COLLECTION</h1>
      <div id='Nav'>
      <NavLink to="/about" className="NavLink">About</NavLink>
      <NavLink to="/home" className="NavLink">Home</NavLink>
   
      </div>
      
    </nav>
  );
}

export default Navbar;
