import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class ListOfPlaces extends Component {
    constructor(props) {
        super(props);
        this.placeItem = React.createRef();
    }

    state = {
        query: ''
    }


    focus() {
        this.placeItem.current.focus();
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render() {
        const {places, handleInfoWindowOpening} = this.props;
        const {query} = this.state;

        let filteredPlaces
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            filteredPlaces = places.filter((place) => match.test(place.restaurant.name));
        } else {
            filteredPlaces = places;
        }
            return (
                <div className="places-list-container">
                    <input 
                        id="filter-input" 
                        type="text" 
                        placeholder="Filter" 
                        ref={this.textInput}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    {places && (
                        <ul>
                            {filteredPlaces.map((place) => 
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