import React from 'react';
import { Navbar, NavbarSection } from '../styles.js';

const AppNavbar = () => {
  return (
    <div>
      <Navbar>
        <li><a href="#">Home</a></li>
        <li><a href="#basketball">Basketball</a></li>
        <li><a href="#soccer">Soccer</a></li>
        <li><a href="#hockey">Hockey</a></li>
        <li><a href="#football">Football</a></li>
      </Navbar>
    </div>
  )
};

export default AppNavbar;