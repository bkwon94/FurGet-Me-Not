import React from 'react';
import Home from './Home.jsx';
import Dogs from './Dogs.jsx';
import Cats from './Cats.jsx';
import Other from './Other.jsx';
import AppNavbar from './AppNavbar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'guest',
      dogFavorites: [],
      catFavorites: []
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.getUserFavorites = this.getUserFavorites.bind(this);
  }

  getCurrentUser(user) {
    this.setState({
      currentUser: user
    })
  }

  getUserFavorites() {
    console.log('getting favs');
    fetch(`/users/${this.state.currentUser}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          dogFavorites: result.favorites.dogs.info,
          catFavorites: result.favorites.cats.info
        })
      })
  }
  componentDidMount() {
    this.getUserFavorites();
  }
  render() {
    return (
      <div>
        <AppNavbar dogFavs={this.state.dogFavorites}></AppNavbar>
        <Home getCurrent={this.getCurrentUser}></Home>
        <Dogs currentUser={this.state.currentUser} getFavs={this.getUserFavorites}></Dogs>
        <Cats currentUser={this.state.currentUser} getFavs={this.getUserFavorites}></Cats>
        <Other></Other>
      </div>

    )
  }
}

export default App;