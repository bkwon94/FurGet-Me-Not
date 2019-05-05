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
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppNavbar></AppNavbar>
        <Home></Home>
        <Dogs></Dogs>
        <Cats></Cats>
        <Other></Other>
      </div>

    )
  }
}

export default App;