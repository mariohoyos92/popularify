import React, {Component} from 'react';
import './Artist.css';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



class Artist extends Component {
    constructor(props){
        super(props);
        this.state = {
            recommendations: null
        }
    }


    componentDidMount(){
        axios.get(`http://localhost:3001/api/test/${this.props.selectedGenre}/${this.props.selectedPopularity}`).then((response) => this.setState({recommendations:response.data.tracks.sort( (a,b) => b.popularity - a.popularity)} ))
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
            <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
      transitionAppearTimeout={1000}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                {

                 this.state.recommendations ? 
                 

                 this.state.recommendations.map((recommendation) => {
        
                 return <div className="artist" key={this.state.recommendations.indexOf(recommendation)}>
                            <div className="picture">
                             <img className="artist-image" src={recommendation.album.images[0].url ? recommendation.album.images[0].url : "#"} alt="album" />
                            </div>
                            <div className="artist-info">
                                <div className="song-name"><span className="info">TRACK: </span>{recommendation.name}</div>
                                <div className="artist-name"><span className="info">ARTIST:</span> {recommendation.artists[0].name}</div>
                                <div className="popularity"><span className="info">POPULARITY: </span>{recommendation.popularity}</div>
                                <div className="url"><a href={recommendation.external_urls.spotify} target="_blank">Listen Here</a></div>
                            </div>        
                        </div>})
                        
                 
                        :
                        ""
                 
                }
                </ReactCSSTransitionGroup>
            </div>     
        )   
    }
}

export default Artist;