import React from 'react';
import { CatsSection, CatFormContainer } from '../styles.js'
import CatsForm from './CatsForm.jsx';

const Cats = () => {
  return (
    <CatsSection id="cats">
      <CatFormContainer>
        <CatsForm />
      </CatFormContainer>
    </CatsSection>
  )
};

export default Cats;