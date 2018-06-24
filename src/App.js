import React, { Component } from 'react';
import Header from './Header'
import ListOfPlaces from './ListOfPlaces'
import './App.css';

class App extends Component {
  state = {
    menuActive: false
}

  render() {
    return (
      <div className="App">
        <Header 
          menuActive = {this.state.menuActive}
        />
        <ListOfPlaces 
          menuActive = {this.state.menuActive}
        />
      </div>
    );
  }
}

export default App;
