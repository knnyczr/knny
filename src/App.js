import React, { Component } from 'react';
import {} from 'dotenv/config'
import Main from './Main';
import Nav from './Nav';
import './css/Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Nav />
            <Main />
      </div>
    );
  }
}

export default App;
