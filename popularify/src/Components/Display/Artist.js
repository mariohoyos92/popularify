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


    componentDidMount(){
        
    }
    //Everytime that a new genre is selected or the popularity slider is moved, the recommendations are updated below
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        axios.get(`http://localhost:3001/api/test/${nextProps.selectedGenre}/${nextProps.selectedPopularity}`).then( (response) => {
           return this.setState({recommendations: response.data.tracks.sort( (a,b) => b.popularity - a.popularity)}, () => console.log(this.state.recommendations))});
    }

            
    shouldComponentUpdate(){
        return this.state.recommendations
    }        
    render(){

            
        return(
            <div>
                {
                 this.state.recommendations.map((recommendation) => {
        
                 return  <div className="artist">
                            <div className="picture">
                             <img src={recommendation[0]['album']['images'][0]['url']} alt={recommendation[0]['album']['artists'][0]['name']} />
                            </div>
                            <div className="artist-info">
                            </div>        
                        </div>})
                 
                }
            </div>     
        )   
    }
}

export default Artist;