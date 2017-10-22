import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import GenreSelector from './Components/Browser/GenreSelector/GenreSelector';
import PopularitySelector from './Components/Browser/PopularitySelector/PopularitySelector';
import Artist from './Components/Display/Artist';

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      selectedGenre: "",
      selectedPopularity: "",  
    }

    this.genreGrabber = this.genreGrabber.bind(this);
    this.popularityGrabber = this.popularityGrabber.bind(this);
  }


  genreGrabber(genre){
    this.setState({selectedGenre: genre}, () =>console.log(this.state.selectedGenre));
  }

  popularityGrabber(popularity){
    this.setState({selectedPopularity: popularity}, ()=> console.log(this.state.selectedPopularity));
  }

  

  render() {
    return (
      <div className="App">
       <Header />
       <div className="main-container">
          <div className="browser">
            <GenreSelector genres={this.state.genres} genreGrabber={this.genreGrabber}/>  
            <PopularitySelector popularityGrabber={this.popularityGrabber}/>
          </div>
          <div className="display">

            {this.state.selectedGenre && this.state.selectedPopularity ?  
              <Artist selectedGenre={this.state.selectedGenre} selectedPopularity={this.state.selectedPopularity}/>
              :
              null
            }
          </div>  
        </div>  
      </div>
    );
  }
}

export default App;
