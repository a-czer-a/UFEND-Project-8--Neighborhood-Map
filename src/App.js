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
    menuIsActive: false,
    places: [],
    infoWindowIsOpen: false,
    placeId: ''
  }

  componentDidMount() {
    this.getData()
}

  handleMenuActivation() {
    this.setState({
      menuIsActive: !this.state.menuIsActive
    })
  }

  handleInfoWindowOpening = (id) => {
    this.setState({
      infoWindowIsOpen: true,
      placeId: id
    })
    console.log(this.state.infoWindowIsOpen)
  }

  handleInfoWindowClosing = () => {
    this.setState({
      infoWindowIsOpen: false
    })
  }

  getData() {
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=zone&lat=50.06465&lon=19.94498&radius=10000&collection_id=30', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'user-key': '12444e5c0a0d7a10f6a562d71713c733'
    }})
  .then((response) => {
    return response.json();
  }).then(returnedPlaces => {
    console.log(returnedPlaces.restaurants)
    const places = returnedPlaces.restaurants
    this.setState({
      places
    })
  })
}

  render() {
    return (
      <div className="App">
        <Header 
            handleMenuActivation = {this.handleMenuActivation}
            menuActive = {this.state.menuIsActive}
        />
        <div className="main-content">
          {this.state.menuIsActive && 
            <ListOfPlaces
                places={this.state.places}
                handleInfoWindowOpening={this.handleInfoWindowOpening}
            />
          }
            <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTUdj7ALkguCKmY7Uj3K-7V-8NHgouz3Q&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                zIndex={-100}
                places={this.state.places}
                placeId={this.state.placeId}
                isOpen={this.state.infoWindowIsOpen}
                handleInfoWindowOpening={this.handleInfoWindowOpening}
                handleInfoWindowClosing={this.handleInfoWindowClosing}
            />
        </div>
      </div>
    );
  }
}

export default App;
