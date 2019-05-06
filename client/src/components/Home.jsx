import React from 'react';
import { useState } from 'react';
import { HeadingSection, MainHeader, MainDescription, MainButton } from '../styles.js';
import Popup from 'reactjs-popup';

const Home = () => {

const [open, openModal] = useState(false);


  return (
    <HeadingSection id="home">
      <MainHeader>Fur Get Me Not</MainHeader>

      <MainDescription><p>Looking for a new dog? Cat? Or maybe... rabbit?</p> <em>Fur Get Me Not</em> is the premier place to find your next furry friend! <p>Simply lookup what your heart desires..</p> <p>And a list of local adoptions will be available!</p>


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