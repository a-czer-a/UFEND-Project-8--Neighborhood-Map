import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import mapStyles from './MapStyles.json'
import icon from './images/Food_4.png'

const Map = withScriptjs(withGoogleMap((props) =>

        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 50.06465, lng: 19.94498}}
            defaultOptions={{styles: mapStyles}}
        >
            {props.isMarkerShown && 
            <Marker 
                tabindex="0"
                position={{lat: 50.045363,lng: 19.935736}}
                animation={2}
                icon={icon}
            />}
        </GoogleMap>
    ))



export default Map