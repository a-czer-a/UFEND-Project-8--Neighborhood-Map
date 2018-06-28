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

    componentDidMount() {
        console.log(this.props.filteredPlaces)
        const {places} = this.props
        this.setState({
            filteredPlaces: places
        })
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
        this.updateFilteredPlaces(query)

    }

    updateFilteredPlaces = (query) => {
        const {places, updateFilteredPlaces} = this.props;
        let searchResults

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            searchResults = places.filter((place) => match.test(place.restaurant.name))
            updateFilteredPlaces(searchResults);
        } else {
            updateFilteredPlaces(places);

        }
    }

    render() {
        const {places, handleInfoWindowOpening, filteredPlaces} = this.props;

            return (
                <div className="places-list-container">
                    <input 
                        id="filter-input" 
                        type="text" 
                        placeholder="Filter restaurants by name" 
                        ref={this.textInput}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    {filteredPlaces && (
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