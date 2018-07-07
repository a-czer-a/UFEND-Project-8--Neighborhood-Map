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
    center: [],
    places: [],
    filteredPlaces: [],
    infoWindowIsOpen: false,
    placeId: '',
    placesAreReady: false,
    mapIsLoaded: true
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
      placeId: id,
    })
  }

  handleInfoWindowClosing = () => {
    this.setState({
      infoWindowIsOpen: false,
      placeId: ''
    })
  }

  updateFilteredPlaces = (results) => {
    this.setState({
      filteredPlaces: results
    })
  }

  handleMapLoading = (loadedMap) => {
    if (!loadedMap) {
      this.setState({
        mapIsLoaded: false
      })
    }
  }

  onMarkerClick = (position) => 
  this.setState({
    center: position
  })

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
    const filteredPlaces = returnedPlaces.restaurants
    const places = returnedPlaces.restaurants
    this.setState({
      places, filteredPlaces, placesAreReady: true
    })
  }).catch((error) => {
    console.log(`Places didn't load due to error: ${error}`)
  })
}

  render() {
    return (
      <div className="App">
        <Header 
            handleMenuActivation = {this.handleMenuActivation}
            menuIsActive = {this.state.menuIsActive}
        />
        <div className="main-content">
          {this.state.menuIsActive && 
            <ListOfPlaces
                places={this.state.places}
                filteredPlaces={this.state.filteredPlaces}
                handleInfoWindowOpening={this.handleInfoWindowOpening} 
                updateFilteredPlaces={this.updateFilteredPlaces}   
                menuIsActive={this.state.menuIsActive}    
            />
          }
          {this.state.mapIsLoaded ? (
            <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTUdj7ALkguCKmY7Uj3K-7V-8NHgouz3Q&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className="map-container" style={{ height: `calc(100vh - 160px)` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                zIndex={-100}
                filteredPlaces={this.state.filteredPlaces}
                places={this.state.places}
                placeId={this.state.placeId}
                map={this.state.map}
                isOpen={this.state.infoWindowIsOpen}
                handleInfoWindowOpening={this.handleInfoWindowOpening}
                handleInfoWindowClosing={this.handleInfoWindowClosing}
                handleMapLoading={this.handleMapLoading}
                center={this.state.center}
                onMarkerClick={this.handleMarkerClick}
            />
          ) : (
            <div className="on-map-error">
              <p>Google map cannot be loaded.</p>
              <p>Please, check your network connection or reload the app.</p>
            </div>
          )}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
