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
    menuActive: false,
    places: []
  }

handleMenuActivation() {
  this.setState({
    menuActive: !this.state.menuActive
  })
  console.log(this.state.menuActive)

}
componentDidMount() {
fetch('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=Krak%C3%B3w&collection_id=child-friendly&sort=rating', {
  headers: {
    'Accept': 'application/json',
    'user-key': '12444e5c0a0d7a10f6a562d71713c733'
  }
})
  .then(({results}) => 
  this.setState({
    places: results
  }))
}

  render() {
    return (
      <div className="App">
        <Header 
            handleMenuActivation = {this.handleMenuActivation}
            menuActive = {this.state.menuActive}
        />
        <div className="main-content">
          {this.state.menuActive && 
            <ListOfPlaces
                places={this.state.places}
            />
          }
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
