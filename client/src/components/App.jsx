import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Heading from './Heading.jsx';
import Basketball from './Basketball.jsx';
import Soccer from './Soccer.jsx';
import Hockey from './Hockey.jsx';
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
        <Heading></Heading>
        <Basketball></Basketball>
        <Soccer></Soccer>
        <Hockey></Hockey>
      </div>

    )
  }
}

export default App;