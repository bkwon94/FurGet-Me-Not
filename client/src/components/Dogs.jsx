import React from 'react';
import { DogsSection, DogHeader, DogFormContainer, DogImageContainer, DogThinkingBubble } from '../styles.js'
import DogsForm from './DogsForm.jsx';



const Dogs = ({ currentUser }) => {
  return (
    <DogsSection id="dogs">

        {/* <DogHeader>Dogs</DogHeader> */}
        <DogThinkingBubble>Bark! Bark! Welcome to <em>Fur Get Me Not</em> Hoomans. Please fill out the form on the right to get started so we can find our FUREVER homes!<p>- Furry Friends <i className="fas fa-dog"></i></p></DogThinkingBubble>
        <DogImageContainer>
          <img src="./images/dog-group.png"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="2000"
          />
        </DogImageContainer>

        <DogFormContainer>
          <DogsForm currentUser={currentUser}></DogsForm>
        </DogFormContainer>

    </DogsSection>
  )
};

export default Dogs;