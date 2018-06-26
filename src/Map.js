import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import mapStyles from './MapStyles.json'
import icon from './images/Food_4.png'
import clickedIcon from './images/Food_5.png'

const Map = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 50.060544, lng: 19.941718}}
            defaultOptions={{styles: mapStyles}}
        >
            {props.isMarkerShown && 
                props.places.map(place => (
                <Marker 
                    tabindex="0"
                    aria-label={place.restaurant.name}
                    position={{lat: parseFloat(place.restaurant.location.latitude), lng: parseFloat(place.restaurant.location.longitude)}}
                    animation={2}
                    defaultIcon={icon}
                    key={place.restaurant.R.res_id}
                    isOpen={props.isOpen}
                    onClick={() => props.handleInfoWindowOpening(place.restaurant.R.res_id)}
                >
                {props.isOpen && place.restaurant.R.res_id === props.placeId &&
                    <InfoWindow
                        onCloseClick={() => props.handleInfoWindowClosing()}
                    >
                        <div className="info-window">
                            <div>{place.restaurant.name}</div>
                            <div>{place.restaurant.location.address}</div>
                            <div>{place.restaurant.user_rating.aggregate_rating}</div>
                        </div>
                    </InfoWindow>
                }
                </Marker>
            ))}
        </GoogleMap>
    ))



export default Map