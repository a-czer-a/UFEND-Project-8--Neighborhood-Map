import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
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
    filteredPlaces: [],
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
  }

  handleInfoWindowClosing = () => {
    this.setState({
      infoWindowIsOpen: false
    })
  }

  updateFilteredPlaces = (results) => {
    this.setState({
      filteredPlaces: results
    })
  }

  getData() {
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=zone&start=0&count=15&lat=50.06465&lon=19.94498&radius=500&collection_id=30&sort=real_distance&order=desc', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'user-key': '12444e5c0a0d7a10f6a562d71713c733'
    }})
  .then((response) => {
    return response.json();
  }).then(returnedPlaces => {
    console.log(returnedPlaces.restaurants)
    const filteredPlaces = returnedPlaces.restaurants
    const places = returnedPlaces.restaurants
    this.setState({
      places, filteredPlaces
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
                filteredPlaces={this.state.filteredPlaces}
                handleInfoWindowOpening={this.handleInfoWindowOpening} 
                updateFilteredPlaces={this.updateFilteredPlaces}       
            />
          }
            <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTUdj7ALkguCKmY7Uj3K-7V-8NHgouz3Q&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `calc(100vh - 150px)` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                zIndex={-100}
                filteredPlaces={this.state.filteredPlaces}
                placeId={this.state.placeId}
                isOpen={this.state.infoWindowIsOpen}
                handleInfoWindowOpening={this.handleInfoWindowOpening}
                handleInfoWindowClosing={this.handleInfoWindowClosing}
            />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
