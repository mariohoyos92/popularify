import React, { Component } from 'react';
import axios from 'axios';



class GenreSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            genres: null,
        }
    }


    componentWillMount(){
        axios.get('http://localhost:3001/api/genres').then( (response) => 
        {this.setState({genres: response.data.genres})})
    }
          

    render(){
       let {genreGrabber} = this.props;
       
        return (
             <div className="genre-container">
                    <h3>Select a Genre From Below</h3>
                    <div className="genre-menu">

                        {this.state.genres ? 

                        this.state.genres.map((genre) => {
                            return <div className="genre-button" key={this.state.genres.indexOf(genre)} onClick={() => genreGrabber(genre)}>
                            {genre.toUpperCase()}
                            </div>})
                        :
                        null
                        }
                    </div>    
            </div> 
            
        )
    }

}

export default GenreSelector;