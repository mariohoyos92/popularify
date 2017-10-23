import React, { Component } from 'react';

class PopularitySelector extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: "50"
        }
    }

    render(){
        let {popularityGrabber} = this.props;
               
        return(
            <div className="slider-container">
                <h3> Select a Target Popularity</h3>
                <input className="slider" type="range" min="1" max="100" value={this.state.value} step="1" onChange={(e)=> {
                    popularityGrabber(e.target.value)
                    this.setState({value: e.target.value}
                    )}}/>
                <div className="popularity-value">
                    {this.state.value}
                </div>
            </div>    
        )
    }
    
}

export default PopularitySelector