import React, { Component } from 'react';
import Header from './Header'
import ListOfPlaces from './ListOfPlaces'
import Map from './Map' 
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.handleMenuActivation = this.handleMenuActivation.bind(this);
  }

  state = {
    menuActive: false
  }

handleMenuActivation() {
  this.setState({
    menuActive: !this.state.menuActive
  })
  console.log(this.state.menuActive)

}

  render() {
    return (
      <div className="App">
        <Header 
        handleMenuActivation = {this.handleMenuActivation}
          menuActive = {this.state.menuActive}
        />
        <div className="main-content">
            <ListOfPlaces 
              menuActive = {this.state.menuActive}
            />
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTUdj7ALkguCKmY7Uj3K-7V-8NHgouz3Q&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              zIndex={-100}
            />
        </div>
      </div>
    );
  }
}

export default App;
