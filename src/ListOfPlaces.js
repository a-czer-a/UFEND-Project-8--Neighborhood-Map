import React, { Component } from 'react';

class ListOfPlaces extends Component {
    render() {
        // const {menuActive} = this.props

            return (
                <div className="places-list-container">
                    {/* <button className="hamburger hamburger--arrow is-active" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>                     */}

                    <input type="text" placeholder="Filter"/>
                </div>

            )

        }
}

export default ListOfPlaces