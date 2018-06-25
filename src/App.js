import React, { Component } from 'react';
import Header from './Header'
import ListOfPlaces from './ListOfPlaces'
import Map from './Map' 
import './App.css';
import './MediaQueries.css'

class App extends Component {

  constructor() {
    super();
    this.handleMenuActivation = this.handleMenuActivation.bind(this);
  }

  state = {
    menuActive: false,
    places: []
  }

  componentDidMount() {
    this.getData()
}

  handleMenuActivation() {
  this.setState({
    menuActive: !this.state.menuActive
  })
  }

  getData() {
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=zone&lat=50.06465&lon=19.94498&collection_id=30', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'user-key': '12444e5c0a0d7a10f6a562d71713c733'
    }})
  .then((response) => {
    return response.json();
  }).then(returnedPlaces => {
    console.log(returnedPlaces.restaurants)
    this.setState({
      places: returnedPlaces.restaurants
    })
  })
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
                containerElement={<div style={{ height: `770px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                zIndex={-100}
            />
        </div>
      </div>
    );
  }
}

export default App;
