import React, {Component} from 'react';
import './Artist.css'
import axios from 'axios'


class Artist extends Component {
    constructor(props){
        super(props);
        this.state = {
            recommendations: null
        }
    }

    componentWillReceiveProps(nextProps){
        axios.get(`http://localhost:3001/api/test/${nextProps.selectedGenre}/${nextProps.selectedPopularity}`).then( (response) => {
            this.setState({recommendations: response.data.tracks}); console.log(this.state.recommendations)});
    }


    render(){



        return(
            <div>
                <div className="artist">
                    <div className="picture">
                    </div>
                    <div className="artist-info">
                    </div>        
                </div> 
                <div className="artist">
                    <div className="picture">
                    </div>
                    <div className="artist-info">
                    </div>        
                </div> 
                <div className="artist">
                    <div className="picture">
                    </div>
                    <div className="artist-info">
                    </div>        
                </div> 
                <div className="artist">
                    <div className="picture">
                    </div>
                    <div className="artist-info">
                    </div>        
                </div> 
                <div className="artist">
                    <div className="picture">
                    </div>
                    <div className="artist-info">
                    </div>        
                </div> 
            </div>        
        )   
    }
}

export default Artist;