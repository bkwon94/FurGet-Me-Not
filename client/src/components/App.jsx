import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Home from './Home.jsx';
import Dogs from './Dogs.jsx';
import Cats from './Cats.jsx';
import Other from './Other.jsx';
import AppNavbar from './AppNavbar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  getCurrentUser(user) {
    this.setState({
      currentUser: user
    })
  }

  render() {
    return (
      <div>
        <AppNavbar></AppNavbar>
        <Home getCurrent={this.getCurrentUser}></Home>
        <Dogs currentUser={this.state.currentUser}></Dogs>
        <Cats currentUser={this.state.currentUser}></Cats>
        <Other></Other>
      </div>

    )
  }
}

export default App;