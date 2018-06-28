import React, {Component} from 'react';
import FeederLogo from './images/feeder-logo.png'

class Header extends Component {
    componentDidMount() {
        this.setState({
            menuIsActive: false
        })
    }

    toggleMenu() {
        this.props.handleMenuActivation()
    }
    
    render() {
    
            let buttonClasses = ["hamburger", "hamburger--arrow"];
            if (this.props.menuIsActive) {
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
                    <div>
                        <h1 className="app-title">Child-friendly restaurants <span className="highlight">in Cracow</span></h1>        
                        <img src={FeederLogo} className="logo"></img>
                    </div>       
                </header>
            )

    }
}
    
export default Header