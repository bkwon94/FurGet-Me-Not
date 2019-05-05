import React from 'react';
import { Navbar, NavbarSection, RegisterButton, NavListItem} from '../styles.js';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const AppNavbar = () => {
  return (
    <div>
      <Navbar>
        <li><NavLink smooth to="#home" style={{ textDecoration: 'none', color: 'white' }}>Fur Get Me Not</NavLink></li>
        <li><NavLink smooth to="#dogs" style={{ textDecoration: 'none', color: 'white' }}>Dogs</NavLink></li>
        <li><NavLink smooth to="#cats" style={{ textDecoration: 'none', color: 'white' }}>Cats</NavLink></li>
        <li><NavLink smooth to="#other" style={{ textDecoration: 'none', color: 'white' }}>Other</NavLink></li>
        {/* popup form */}
        <li><RegisterButton href="#">Register</RegisterButton></li>
      </Navbar>
    </div>
  )
};

export default AppNavbar;