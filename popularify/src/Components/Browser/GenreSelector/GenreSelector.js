import React, { Component } from 'react';



class GenreSelector extends Component {

    render(){
       let {genres} = this.props;
       console.log(genres);

       let genreList = genres.map((genre) =>  <div className="genre-button" key={genres.indexOf(genre)}>{genre}</div>)

        return (

             <div className="genre-container">
                    <h3>Select a Genre from Below</h3>
                    <div className="genre-menu">
                        {genreList}
                    </div>    
            </div> 
            
        )
    }

}

export default GenreSelector;