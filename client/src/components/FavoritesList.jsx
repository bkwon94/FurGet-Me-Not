import React from 'react';
import FavoritesItem from './FavoritesItem.jsx';
import { FavoritesPage } from '../styles.js';

const FavoritesList = ({ dogFavs }) => {
  if (!dogFavs.name) {
    return (
      <FavoritesPage>
        <h2>Favorites:</h2>
      </FavoritesPage>
    )
  }
  return (
    <FavoritesPage>
      <h2>Favorites: </h2>
      {/* NAME */}
      <span><h4>Name:</h4>
        {dogFavs.name.map((name, index) => {
          return <FavoritesItem key={index} name={name}/>
        })}
      </span>
      {/* BREED */}
      <span><h4>Breed:</h4>
        {dogFavs.breed.map((breed, index) => {
          return <FavoritesItem key={index} breed={breed}/>
        })}
      </span>
      {/* URL */}
      <span><h4>Link:</h4>
        {dogFavs.url.map((url, index) => {
          return <FavoritesItem key={index} url={url}/>
        })}
      </span>
    </FavoritesPage>
  )
}

export default FavoritesList;