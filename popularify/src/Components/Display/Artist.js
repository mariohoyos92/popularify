import React, { Component } from "react";
import "./Artist.css";
import axios from "axios";
import CSSTransitionGroup from "react-addons-css-transition-group";
import Recommendation from "./Recommendation";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3001/api/test/${this.props.selectedGenre}/${this.props
          .selectedPopularity}`
      )
      .then(response =>
        this.setState({
          recommendations: response.data.tracks.sort(
            (a, b) => b.popularity - a.popularity
          )
        })
      );
  }

  //Everytime that a new genre is selected or the popularity slider is moved, the recommendations are updated below
  componentWillReceiveProps(nextProps) {
    axios
      .get(
        `http://localhost:3001/api/test/${nextProps.selectedGenre}/${nextProps.selectedPopularity}`
      )
      .then(response => {
        return this.setState(
          {
            recommendations: response.data.tracks.sort(
              (a, b) => b.popularity - a.popularity
            )
          },
        );
      });
  }

  render() {
    const rec =  this.state.recommendations
      ? this.state.recommendations.map((recommendation, i) => {
      return (
        <Recommendation
          recommendation={recommendation}
          key={recommendation.name}
        />
      );
    }) : "";

    return (
      <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={2500}
        >
           {rec}
           
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Artist;
