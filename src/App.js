import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Cards/>
      </div>
    );
  }
}

export default App;
