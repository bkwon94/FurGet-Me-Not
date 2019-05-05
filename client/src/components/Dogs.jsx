import React from 'react';
import { DogsSection, DogHeader, DogFormContainer } from '../styles.js'
import DogsForm from './DogsForm.jsx';



const Dogs = () => {
  return (
    <DogsSection id="dogs">

        <DogHeader>Dogs</DogHeader>
        <DogFormContainer>
          <DogsForm></DogsForm>
        </DogFormContainer>



    </DogsSection>
  )
};

export default Dogs;