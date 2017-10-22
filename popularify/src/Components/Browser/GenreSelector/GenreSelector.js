import React, { Component } from 'react';



class GenreSelector extends Component {

    render(){
       let {genres, genreGrabber} = this.props;
       console.log(genres);

       let genreList = genres.map((genre) => {

         return <div className="genre-button" key={genres.indexOf(genre)} onClick={() => genreGrabber(genre)}>
                {genre}
                </div>
       })
       

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