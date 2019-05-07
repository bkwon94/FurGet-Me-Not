import React from 'react';
import { CatsSection, CatFormContainer, CatThinkingBubble, CatImageContainer } from '../styles.js'
import CatsForm from './CatsForm.jsx';

const Cats = () => {
  return (
    <CatsSection id="cats">

    <CatThinkingBubble data-aos="flip-up" data-aos-delay="800" data-aos-duration="1200">
      <em>Meeeeoooooowww!</em> <span> Hope to be your <em>furr</em>-end soon!</span><p>-  <i className="fas fa-cat"></i></p>
    </CatThinkingBubble>

        <CatImageContainer>
          <img src="./images/cat-back.png"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="2000"
          />
        </CatImageContainer>

      <CatFormContainer>
        <CatsForm />
      </CatFormContainer>

    </CatsSection>
  )
};

export default Cats;