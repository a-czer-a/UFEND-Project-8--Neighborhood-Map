import React, { Component } from 'react';

class ListOfPlaces extends Component {
    render() {
        const {places} = this.props
            return (
                <div className="places-list-container">
                    <input id="filter-input" type="text" placeholder="Filter"/>
                    {places}
                    {places && (
                        <div>
                            {places.map((place) => 
                                <li key={place.id}>{place.name}</li>
                            )}
                        </div>
                    )}
                </div>
            )
    }
}

export default ListOfPlaces