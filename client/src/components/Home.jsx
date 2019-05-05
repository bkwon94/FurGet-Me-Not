import React from 'react';
import { useState } from 'react';
import { HeadingSection, MainHeader, MainDescription, MainButton } from '../styles.js';
import Popup from 'reactjs-popup';

const Home = () => {

const [open, openModal] = useState(false);


  return (
    <HeadingSection id="home">
      <MainHeader>Fur Get Me Not</MainHeader>

      <MainDescription><div>Looking for a new dog? Cat? Or maybe... rabbit?</div> <em>Fur Get Me Not</em> is the premier place to find your next fur buddy! <div>Simply lookup what furry friend your heart desires</div> <div>And a list of local adoption locations will be available!</div>


      <MainButton onClick={() => openModal(true)}>Get Started!  <i className="fas fa-paw"></i></MainButton>

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={() => openModal(false)}
      >
        <form>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
        </form>
      </Popup>


      </MainDescription>

    </HeadingSection>
  )
};

export default Home;