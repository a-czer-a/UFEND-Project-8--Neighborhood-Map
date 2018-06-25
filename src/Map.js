import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import mapStyles from './MapStyles.json'
import icon from './images/Food_4.png'

const Map = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: 50.060544, lng: 19.941718}}
            defaultOptions={{styles: mapStyles}}
        >
            {props.isMarkerShown && 
                props.places.map(place => (
                <Marker 
                    tabindex="0"
                    position={{lat: parseFloat(place.restaurant.location.latitude), lng: parseFloat(place.restaurant.location.longitude)}}
                    animation={2}
                    icon={icon}
                    key={place.restaurant.R.res_id}
                />))}
        </GoogleMap>
    ))



export default Map