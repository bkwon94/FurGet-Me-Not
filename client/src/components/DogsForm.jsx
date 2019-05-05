import React from 'react';
import { TOKEN } from '../../../config.js';
import DogsDisplay from './DogsDisplay.jsx';
import Dogs from './Dogs.jsx';
import { DogDisplayContainer, DogForm } from '../styles.js';

class DogsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'dog',
      breed: '',
      size: '',
      gender: '',
      location: '',
      dogsData: null,
      doneLoading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.findDogs = this.findDogs.bind(this);
  }

  // handle form submission, prevents page refresh default behavior
  handleFormSubmit(e) {
    e.preventDefault();
    this.findDogs();
  }

  // api call to fetch dogs based on user input
  findDogs () {
    console.log('Fetching dog data');
    fetch(`https://api.petfinder.com/v2/animals?type=${this.state.type}&breed=${this.state.breed}&size=${this.state.size}&gender=${this.state.gender}&location=${this.state.location}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': TOKEN
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log('Setting state');
        this.setState({
          doneLoading: !this.state.doneLoading,
          dogsData: data
        })
      },
      error => {
        this.setState({
          dogsData: error
        });
      }
    )
  }

  // controls user input and updates state accordingly
  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (!this.state.doneLoading) {
      return (
        <DogForm>
          <h2>What are you looking for?</h2>
          <form method="get" onSubmit={this.handleFormSubmit}>
              <input name="breed" type="text" placeholder="Breed" onChange={this.handleInputChange}/>
              <input name="size" type="text" placeholder="Size" onChange={this.handleInputChange}/>
              <input name="gender" type="text" placeholder="Gender" onChange={this.handleInputChange}/>
              <input name="location" type="text" placeholder="Location" onChange={this.handleInputChange}/>
            <button>Find Doggos!</button>
          </form>
        </DogForm>
      )
    } else if (this.state.doneLoading && this.state.dogsData) {
      return (
        <DogDisplayContainer>

            {
              this.state.dogsData.animals.map((dog, index) => {
                return <DogsDisplay key={index} dog={dog}/>
              })
            }

        </DogDisplayContainer>
      )
    }

  }
}

export default DogsForm;