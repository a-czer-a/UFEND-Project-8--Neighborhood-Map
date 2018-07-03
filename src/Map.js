import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
import ReactStreetview from 'react-streetview'
import mapStyles from './MapStyles.json'
import defaultIcon from './images/Food_4.png'
import clickedIcon from './images/Food_6.png'

const Map = withScriptjs(withGoogleMap((props) => {
    const googleMapsApiKey = 'AIzaSyBTUdj7ALkguCKmY7Uj3K-7V-8NHgouz3Q';
    let animationStyle = 2

    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: 50.061897, lng: 19.936756}}
            defaultOptions={{styles: mapStyles}}
            onTilesLoaded={() => {
                const accessibleMap = document.querySelector('iframe');
                accessibleMap.setAttribute('title', 'Map of child-friendly restaurants in Cracow');
            }}
        >
            {props.isMarkerShown && 
                props.filteredPlaces.map(place => {
                    const selectedMarkerId = place.restaurant.R.res_id
                    let markerIcon

                    if (selectedMarkerId === props.placeId) {
                        markerIcon = clickedIcon
                        animationStyle = 1
                    } else {
                        markerIcon = defaultIcon
                        animationStyle = null
                    }
                    return (
                        <Marker 
                            tabindex="0"
                            aria-label={place.restaurant.name}
                            position={{lat: parseFloat(place.restaurant.location.latitude), lng: parseFloat(place.restaurant.location.longitude)}}
                            animation={animationStyle}
                            icon={markerIcon}
                            key={selectedMarkerId}
                            isOpen={props.isOpen}
                            onClick={() => props.handleInfoWindowOpening(selectedMarkerId)}
                        >
                        {props.isOpen && selectedMarkerId === props.placeId &&
                            <InfoWindow
                                onCloseClick={() => props.handleInfoWindowClosing()}
                            >
                                <div className="info-window">
                                    <div className="restaurant-name">{place.restaurant.name}</div>
                                    <div className="restaurant-address">{place.restaurant.location.address}</div>
                                    <div className="restaurant-cuisine"><span>Cuisine:</span> {place.restaurant.cuisines}</div>
                                    <div className="restaurant-rating"><span>Rating:</span><strong> {place.restaurant.user_rating.aggregate_rating}</strong></div>
                                    <div className="restaurant-zomato-link"><a href={place.restaurant.events_url}>Check details</a></div>
                                    <div className="restaurant-streetview">
                                        <ReactStreetview
                                            apiKey={googleMapsApiKey}
                                            streetViewPanoramaOptions={{
                                                position: {lat: parseFloat(place.restaurant.location.latitude), lng: parseFloat(place.restaurant.location.longitude)},
                                                pov: {heading: 100, pitch: 3},
                                                zoom: 1
                                            }}
                                        />
                                    </div>
                                </div>
                            </InfoWindow>
                        }
                        </Marker>
                    )
                })}
        </GoogleMap>
    )}
))

export default Map