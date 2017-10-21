import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header'
import GenreSelector from './Components/Browser/GenreSelector/GenreSelector';
import PopularitySelector from './Components/Browser/PopularitySelector/PopularitySelector';
import Artist from './Components/Display/Artist';

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      genres: undefined,
      recommendations: [],
      selectedGenre: null,
      selectedPopularity: null,
       
    }
  }


  componentDidMount(){
    axios.get("http://localhost:3001/api/test/country/100").then( (response) => {
      this.setState({recommendations: response}); console.log(response)});
    axios.get('http://localhost:3001/api/genres').then( (response) => 
    {this.setState({genres: response.data.genres});
    
    })
  }

  render() {
    return (
      <div className="App">
       <Header />
       <div className="main-container">
          <div className="browser">
            {
            this.state.genres ?
            <GenreSelector genres={this.state.genres}/>  
            : null
            }
            <PopularitySelector />
          </div>
          <div className="display">
                <Artist />
          </div>  
        </div>  
      </div>
    );
  }
}

export default App;
