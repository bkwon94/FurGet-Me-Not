import React from 'react';

const DogsDisplay = (props) => {
  return (
    <div>
      <img src={props.dog.photos[0].medium}/>
      <p>{props.dog.name}</p>
      <p>{props.dog.description}</p>
      <p>{props.dog.description}</p>
      <p>{props.dog.url}</p>
      <p>{props.dog.url}</p>
    </div>
  );
};

export default DogsDisplay;