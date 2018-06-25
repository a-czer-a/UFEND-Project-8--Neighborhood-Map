import React, {Component} from 'react';

class Header extends Component {
    // state = {
    //     menuActive: false
    // }
    
    componentDidMount() {
        this.setState({
            menuActive: false
        })
    }

    toggleMenu() {
        this.props.handleMenuActivation()
        // this.setState({
        //     menuActive: !this.state.menuActive
        // })
    }
    
    render() {
    
            let buttonClasses = ["hamburger", "hamburger--arrow"];
            if (this.props.menuActive) {
                buttonClasses.push("is-active");
            }
    
            return (
               
                <header className="app-header">
                    <div className="button-container">
                        <button className={buttonClasses.join(' ')} type="button" onClick={this.toggleMenu.bind(this)}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button> 
                    </div>
                    <h1 className="app-title">Child-friendly restaurants in Cracow</h1>               
                </header>
            )

    }
}
    
export default Header