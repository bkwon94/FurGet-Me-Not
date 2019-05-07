import React from 'react';
import {  DogImage, DogName, DogInfoContainer, DogDescription, DogButton, DogNameAndInfo, FavoriteButton } from '../styles.js';

const DogsDisplay = ({
  dog: {
    photos, name, description, url
  },
  updateFavorites
}) => {
  // ENSURE DESCRIPTION + PHOTOS EXIST IN DATA
  if (!description || description.length < 30) { return null; }
  if (!photos.length) { return null; }



  return (
    <DogInfoContainer>
      <DogNameAndInfo>
        <DogName>{name}</DogName>
        <DogDescription>{description}
        <div>
          <FavoriteButton onClick={() => updateFavorites(name, url)}><i className="far fa-heart"></i></FavoriteButton>
        </div>
        </DogDescription>
        <DogButton href={url}>Adopt Me! <i className="fas fa-home"></i></DogButton>

      </DogNameAndInfo>
      <DogImage src={photos[0].medium || photos[0].small}/>
    </DogInfoContainer>
  );
};

export default DogsDisplay;