import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* Tambahkan class active otomatis di App.jsx */}
        <li><a href="#hero-section" className="active">Home</a></li> 
        <li><a href="#about">About</a></li>
        <li><a href="#Myprojects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;