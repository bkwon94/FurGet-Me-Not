import React from 'react';
import { useState } from 'react';
import { HeadingSection, MainHeader, MainDescription, MainButton, Form } from '../styles.js';
import { useInput } from '../hooks/input-hook.jsx';
import Popup from 'reactjs-popup';

const Home = () => {

const [open, openModal] = useState(false);
const [username, setValue] = useState('');
const [password, setValue] = useState('');
const [firstName, setValue] = useState('');
const [lastName, setValue] = useState('');

// need to handle form input change
const onChange = event => setValue(event.target.value);

  return (
    <HeadingSection id="home">
      <MainHeader>Fur Get Me Not</MainHeader>

      <MainDescription><p>Looking for a new dog? Cat? Or maybe... rabbit?</p> <em>Fur Get Me Not</em> is the premier place to find your next furry friend! <p>Simply lookup what your heart desires..</p> <p>And a list of local adoptions will be available!</p>


      <MainButton onClick={() => openModal(true)}>Get Started!  <i className="fas fa-paw"></i></MainButton>

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={() => openModal(false)}
      >
        <Form>
          <h2>Create An Account</h2>
          <form>
            <input value={username} type="text" placeholder="Username" onChange={onChange}/>
            <input value={password} type="text" placeholder="Password" onChange={onChange}/>
            <input value={firstName} type="text" placeholder="First Name" onChange={onChange}/>
            <input value={lastName} type="text" placeholder="Last Name" onChange={onChange}/>
            <button>Register</button>
          </form>
        </Form>
      </Popup>

      </MainDescription>

    </HeadingSection>
  )
};

export default Home;