import React from 'react';
import { TOKEN } from '../../../config.js';
import { Form, CatDisplayContainer } from '../styles.js';
import CatsDisplay from './CatsDisplay.jsx';

class CatsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'cat',
      breed: '',
      size: '',
      gender: '',
      location: '',
      catsData: null,
      doneLoading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.findCats = this.findCats.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
  }

  // handle form submission, prevents page refresh default behavior
  handleFormSubmit(e) {
    e.preventDefault();
    this.findCats();
  }

  // api call to fetch Cats based on user input
  findCats () {
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
          catsData: data
        })
      },
      error => {
        this.setState({
          catsData: error
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

  // update favorites of current user
  updateFavorites(name, url) {
    fetch('/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.currentUser,
        breed: this.state.breed,
        name: name,
        url: url
      })
    })
      .then((res) => {
        console.log(res);
        this.props.getFavs();
      })
      .catch((err) => {
        throw err;
      })

  }

  render() {
    if (!this.state.doneLoading) {
      return (
        <div>
          <img src="./images/cat-lay.png"
            data-aos="fade-up"
            data-aos-delay="1900"
            data-aos-duration="300"
          />
          <Form
          data-aos="fade-up"
          data-aos-duration="2000"
          >
            <h2>What are you looking for?</h2>
            <form method="get" onSubmit={this.handleFormSubmit}>
              <input name="breed" type="text" placeholder="Breed" onChange={this.handleInputChange}/>
              <input name="size" type="text" placeholder="Size" onChange={this.handleInputChange}/>
              <input name="gender" type="text" placeholder="Gender" onChange={this.handleInputChange}/>
              <input name="location" type="text" placeholder="Location" onChange={this.handleInputChange}/>
            <button>Find Cats!</button>
            </form>
          </Form>
        </div>

      )
    } else if (this.state.doneLoading && this.state.catsData) {
      return (
        <CatDisplayContainer>
          <h2>{this.state.breed}'s near you</h2>
            {
              this.state.catsData.animals.map((cat, index) => {
                return <CatsDisplay key={index} cat={cat} updateFavorites={this.updateFavorites}/>
              })
            }

        </CatDisplayContainer>
      )
    }

  }
}

export default CatsForm;