import React from 'react';
import { withGoogleMap,withScriptjs } from 'react-google-maps';
import Map from './Map'

const MapContainer = withScriptjs(withGoogleMap(props => {
  return <Map {...props}></Map>
}));

export default MapContainer;