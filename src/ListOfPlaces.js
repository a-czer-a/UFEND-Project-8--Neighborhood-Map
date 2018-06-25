import React, { Component } from 'react';

class ListOfPlaces extends Component {
    render() {
        const {places} = this.props
            return (
                <div className="places-list-container">
                    <input id="filter-input" type="text" placeholder="Filter"/>
                    {places && (
                        <ul>
                            {places.map((restaurant) => 
                                <li key={restaurant.res_id} className="place">Nazwa {restaurant.name}</li>
                            )}
                        </ul>
                    )}
                </div>
            )
    }
}

export default ListOfPlaces