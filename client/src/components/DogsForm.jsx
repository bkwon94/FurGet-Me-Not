import React from 'react';
import { TOKEN } from '../../../config.js';
import DogsDisplay from './DogsDisplay.jsx';
import Dogs from './Dogs.jsx';

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
        <div>
          <form method="get" onSubmit={this.handleFormSubmit}>
            <label>Breed:
              <input name="breed" type="text" onChange={this.handleInputChange}/>
            </label>
            <label>Size:
              <input name="size" type="text" onChange={this.handleInputChange}/>
            </label>
            <label>Gender:
              <input name="gender" type="text" onChange={this.handleInputChange}/>
            </label>
            <label>Your Location:
              <input name="location" type="text" onChange={this.handleInputChange}/>
            </label>
            <button>Find Doggos!</button>
          </form>
        </div>
      )
    } else if (this.state.doneLoading && this.state.dogsData) {
      return (
        <div>

            {
              this.state.dogsData.animals.map((dog, index) => {
                return <DogsDisplay key={index} dog={dog}/>
              })
            }

        </div>
      )
    }

  }
}

export default DogsForm;