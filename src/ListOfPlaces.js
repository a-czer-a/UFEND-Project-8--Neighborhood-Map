import React, { Component } from 'react';

class ListOfPlaces extends Component {
    constructor(props) {
        super(props);
        this.placeItem = React.createRef();
    }

    focus() {
        this.placeItem.current.focus();
    }

    render() {
        const {places, handleInfoWindowOpening} = this.props
            return (
                <div className="places-list-container">
                    <input id="filter-input" type="text" placeholder="Filter" ref={this.textInput}/>
                    {places && (
                        <ul>
                            {places.map((place) => 
                                <li 
                                    key={place.restaurant.R.res_id} 
                                    className="place"
                                    aria-label={place.restaurant.name}
                                    tabIndex="0"
                                    ref={this.placeItem}
                                    onClick={() => handleInfoWindowOpening(place.restaurant.R.res_id)}
                                >
                                    <span>{place.restaurant.name}</span>
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            )
    }
}

export default ListOfPlaces