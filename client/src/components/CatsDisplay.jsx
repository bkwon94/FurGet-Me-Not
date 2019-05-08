import React from 'react';
import {  CatImage, CatName, CatInfoContainer, CatDescription, CatButton, CatNameAndInfo, FavoriteButton } from '../styles.js';

const CatsDisplay = ({
  cat: {
    photos, name, description, url
  },
  updateFavorites
}) => {
  // ENSURE DESCRIPTION + PHOTOS EXIST IN DATA
  if (!description || description.length < 30) { return null; }
  if (!photos.length) { return null; }

  return (
    <CatInfoContainer>
      <CatNameAndInfo>
        <CatName>{name}</CatName>

        <CatDescription>{description}
          <div>
            <FavoriteButton onClick={() => updateFavorites(name, url)}><i className="far fa-heart"></i></FavoriteButton>
          </div>
        </CatDescription>
        
        <CatButton href={url}>Adopt Me! <i className="fas fa-home"></i></CatButton>

      </CatNameAndInfo>
      <CatImage src={photos[0].medium || photos[0].small}/>
    </CatInfoContainer>
  );
};

export default CatsDisplay;