import React, { Component } from 'react';

class ListOfPlaces extends Component {
    render() {
        const {places} = this.props
            return (
                <div className="places-list-container">
                    <input id="filter-input" type="text" placeholder="Filter"/>
                    {places && (
                        <ul>
                            {places.map((place) => 
                                <li key={place.restaurant.res_id} className="place">{place.restaurant.name}{place.restaurant.location.latitude}</li>
                            )}
                        </ul>
                    )}
                </div>
            )
    }
}

export default ListOfPlaces