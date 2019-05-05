import React from 'react';
import { DogsSection, DogHeader, DogFormContainer, DogImageContainer } from '../styles.js'
import DogsForm from './DogsForm.jsx';



const Dogs = () => {
  return (
    <DogsSection id="dogs">

        <DogHeader>Dogs</DogHeader>
        <DogImageContainer>
          <img src="./images/dog-group.png"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="2000"
          />
        </DogImageContainer>

        <DogFormContainer>
          <img src="./images/dogpeek.png"
            data-aos="fade-up"
            data-aos-delay="1900"
            data-aos-duration="300"
          />
          <DogsForm></DogsForm>
        </DogFormContainer>

    </DogsSection>
  )
};

export default Dogs;