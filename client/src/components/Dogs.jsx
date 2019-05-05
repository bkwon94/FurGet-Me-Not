import React from 'react';
import { DogsSection, SectionHeader } from '../styles.js'
import Fade from 'react-reveal/Fade';

const Dogs = () => {
  return (
    <DogsSection id="dogs">

        {/* <Fade left> */}
          <SectionHeader>Dogs</SectionHeader>
        {/* </Fade> */}

    </DogsSection>
  )
};

export default Dogs;