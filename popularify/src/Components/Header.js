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
                 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><div className="easter"></div></a>
            </div>
            <div className="bottom">
                <div>Selected Genre: {this.props.selectedGenre.toUpperCase()}</div>
                <div>Selected Popularity: {this.props.selectedPopularity}</div>
            </div>
        </div>   
        ) 
    }

}

export default Header;