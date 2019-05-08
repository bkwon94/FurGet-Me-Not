import React from 'react';
import { Navbar, NavTitle, NavItems, NavItemsContainer, Favorites} from '../styles.js';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import FavoritesList from './FavoritesList.jsx';

const AppNavbar = ({ dogFavs }) => {

  const [open, openModal] = useState(false);

  return (
    <div>
      <Navbar>
        <NavTitle><i className="fas fa-paw"></i><NavLink smooth to="#home" style={{ textDecoration: 'none', color: 'white' }}>  FurGet Me Not</NavLink></NavTitle>

        <NavItemsContainer>
          <NavItems><NavLink smooth to="#dogs" style={{ textDecoration: 'none', color: 'white' }}>Dogs</NavLink></NavItems>
          <NavItems><NavLink smooth to="#cats" style={{ textDecoration: 'none', color: 'white' }}>Cats</NavLink></NavItems>
          <NavItems><NavLink smooth to="#other" style={{ textDecoration: 'none', color: 'white' }}>Other</ NavLink></NavItems>
          <NavItems>
            <Favorites onClick={() => openModal(true)}><i className="far fa-heart"></i></Favorites>
            <Popup open={open} closeOnDocumentClick onClose={() => openModal(false)}>
              <FavoritesList dogFavs={dogFavs}/>
            </Popup>
          </NavItems>
        </NavItemsContainer>
      </Navbar>
    </div>
  )
};

export default AppNavbar;