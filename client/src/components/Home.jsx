import React from 'react';
import { useState } from 'react';
import { HeadingSection, MainHeader, MainDescription, MainButton, Form } from '../styles.js';
import { useInput } from '../hooks/input-hook.jsx';
import Popup from 'reactjs-popup';


const Home = (props) => {

  const [open, openModal] = useState(false);
  // HANDLE FORM CHANGE AND SUBMIT WITH REACT HOOKS
  const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');

  // need to handle form input change
  const handleSubmit = event => {
    event.preventDefault();
    props.getCurrent(username);

    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        resetUsername();
        resetPassword();
        resetFirstName();
        resetLastName();
      })
  }

  return (
    <HeadingSection id="home">
      <MainHeader>FurGet Me Not</MainHeader>
      <MainDescription><p>Looking for a new dog? Cat? Or maybe... a rabbit?</p> <em>Fur Get Me Not</em> is the #1 place to find your next furry friend! <p>Simply lookup what your heart desires..</p> <p>And a list of local pets up for adoption will be available!</p>

      <MainButton onClick={() => openModal(true)}>Get Started!  <i className="fas fa-paw"></i></MainButton>

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={() => openModal(false)}
      >
        <Form>
          <h2>Create An Account</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" {...bindUsername}/>
            <input type="password" placeholder="Password" {...bindPassword}/>
            <input type="text" placeholder="First Name" {...bindFirstName}/>
            <input type="text" placeholder="Last Name" {...bindLastName}/>
            <button>Register</button>
          </form>
        </Form>
      </Popup>
      </MainDescription>
    </HeadingSection>
  )
};

export default Home;