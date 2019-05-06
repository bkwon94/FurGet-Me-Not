import React from 'react';
import { Navbar, NavbarSection, RegisterButton, NavTitle, NavItems, NavItemsContainer} from '../styles.js';
import { NavHashLink as NavLink } from 'react-router-hash-link';



const AppNavbar = () => {
  return (
    <div>
      <Navbar>
        <NavTitle><i className="fas fa-paw"></i><NavLink smooth to="#home" style={{ textDecoration: 'none', color: 'white' }}>  Fur Get Me Not</NavLink></NavTitle>

        <NavItemsContainer>
          <NavItems><NavLink smooth to="#dogs" style={{ textDecoration: 'none', color: 'white' }}>Dogs</NavLink></NavItems>
          <NavItems><NavLink smooth to="#cats" style={{ textDecoration: 'none', color: 'white' }}>Cats</NavLink></NavItems>
          <NavItems><NavLink smooth to="#other" style={{ textDecoration: 'none', color: 'white' }}>Other</ NavLink></NavItems>
          <NavItems><NavLink smooth to="#other" style={{ textDecoration: 'none', color: 'white' }}>Favorites</ NavLink></NavItems>
        </NavItemsContainer>

      </Navbar>
    </div>
  )
};

export default AppNavbar;