import React from 'react';
import {  DogImage, DogName, DogInfoContainer, DogDescription, DogButton, DogNameAndInfo, FavoriteButton } from '../styles.js';

const DogsDisplay = ({
  dog: {
    photos, name, description, url
  }
}) => {
  if (!description || description.length < 30) { return null; }
  if (!photos.length) { return null; }
  return (
    <DogInfoContainer>
      <DogNameAndInfo>
        <DogName>{name}</DogName>
        <DogDescription>{description}
        <div>
          <FavoriteButton><i className="fas fa-heart"></i></FavoriteButton>
        </div>
        </DogDescription>
        <DogButton href={url}>Adopt Me! <i className="fas fa-home"></i></DogButton>

      </DogNameAndInfo>
      <DogImage src={photos[0].medium || photos[0].small}/>
    </DogInfoContainer>
  );
};

export default DogsDisplay;