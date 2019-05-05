import React from 'react';
import { Navbar, NavbarSection } from '../styles.js';
import { HashLink as Link } from 'react-router-hash-link';

const AppNavbar = () => {
  return (
    <div>
      <Navbar>
        <li><Link smooth to="#home">Home</Link></li>
        <li><Link smooth to="#dogs">Dogs</Link></li>
        <li><Link smooth to="#cats">Cats</Link></li>
        <li><Link smooth to="#other">Other</Link></li>
        <li><a href="#">Register</a></li>
      </Navbar>
    </div>
  )
};

export default AppNavbar;