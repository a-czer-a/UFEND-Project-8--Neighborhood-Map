import React, {Component} from 'react';
import FeederLogo from './images/feeder-logo.png'

class Header extends Component {
    componentDidMount() {
        this.setState({
            menuIsActive: false,
            ariaExpanded: true
        })
    }

    toggleMenu() {
        this.props.handleMenuActivation()
        const menu = document.getElementById('menu-button');        
        menu.setAttribute('aria-expanded', this.state.ariaExpanded);
        this.setState({
            ariaExpanded: !this.state.ariaExpanded
        })
    }
    
    render() {
        let buttonClasses = ["hamburger", "hamburger--arrow"];
        if (this.props.menuIsActive) {
            buttonClasses.push("is-active");
        }
    
        return (
            <header className="app-header">
                <div className="button-container">
                    <button id="menu-button" className={buttonClasses.join(' ')} type="button" onClick={this.toggleMenu.bind(this)} aria-expanded="false">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button> 
                </div>
                <div>
                    <h1 className="app-title" tabIndex="0">Child-friendly restaurants <span className="highlight">in Cracow</span></h1>        
                    <img src={FeederLogo} alt="logo" className="logo"></img>
                </div>       
            </header>
        )
    }
}
    
export default Header