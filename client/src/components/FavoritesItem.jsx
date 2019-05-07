import React from 'react';
import { DogButton, FavoritesItems } from '../styles';

const FavoritesItem = ({ name, breed, url}) => {
  return (
    <FavoritesItems>
      <span>{name}</span>
      <span>{breed}</span>
      {url ? <span><a href={url}>Adopt!</a></span>: null}
    </FavoritesItems>
  )
}

export default FavoritesItem;