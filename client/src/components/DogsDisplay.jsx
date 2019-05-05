import React from 'react';
import {  DogImage, DogName, DogInfoContainer, DogDescription, DogURL, DogNameAndInfo } from '../styles.js';

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
        <DogURL href={url}>Adopt Me!</DogURL>
      </DogNameAndInfo>
      <DogImage src={photos[0].medium}/>
    </DogInfoContainer>
  );
};

export default DogsDisplay;