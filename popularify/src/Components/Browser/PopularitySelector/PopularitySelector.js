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
            <div>
                <h3> Select The Popularity You Want Below </h3>
                <input type="range" min="1" max="100" value={this.state.value} step="1" onChange={(e)=> {
                    popularityGrabber(e.target.value)
                    this.setState({value: e.target.value}
                    )}}/>
            </div>    
        )
    }
    
}

export default PopularitySelector