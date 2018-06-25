import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 50.06465, lng: 19.94498}}
        >
            {props.isMarkerShown && 
            <Marker 
                tabindex="0"
                position={{lat: 50.045363,lng: 19.935736}}
                animation={2}
            />}
        </GoogleMap>
    ))

export default Map