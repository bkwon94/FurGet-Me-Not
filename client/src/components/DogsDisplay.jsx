import React from 'react';
import {  DogImage, DogName, DogInfoContainer, DogDescription, DogButton, DogNameAndInfo } from '../styles.js';

const DogsDisplay = ({
  dog: {
    photos, name, description, url
  }
}) => {

  return (
    <DogInfoContainer>
      <DogNameAndInfo>
        <DogName>{name}</DogName>
        <DogDescription>{description}</DogDescription>
        <DogButton href={url}>Adopt Me!</DogButton>
      </DogNameAndInfo>
      <DogImage src={photos[0].medium}/>
    </DogInfoContainer>
  );
};

export default DogsDisplay;