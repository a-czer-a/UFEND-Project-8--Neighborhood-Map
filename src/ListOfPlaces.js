import React, { Component } from 'react';

class ListOfPlaces extends Component {
    render() {
        const {menuActive} = this.props
        if (menuActive) {
            return (
                <div className="places-list-container">
                    <input id="filter-input" type="text" placeholder="Filter"/>
                </div>
            )
        } else {
            return (
                null
            )
        }     
    }
}

export default ListOfPlaces