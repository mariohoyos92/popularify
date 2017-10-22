import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.png'


class Header extends Component {
    



    render(){

        return(
        <div className="header">
            <div className="top">
                 <img className="logo" src={logo} alt="spotify" />
                 <h1>Popularify</h1>
            </div>
            <div className="bottom"></div>
        </div>   
        ) 
    }

}

export default Header;