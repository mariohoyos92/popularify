import React from "react";
import "./Recommendation.css";

export default function Recommendation({ recommendation, key }) {
 return (
    <div className="artist" key={key}>
      <div className="picture">
        {recommendation.album.images[0].url
              ? <img
          className="artist-image"
          src={
            recommendation.album.images[0].url
              ? recommendation.album.images[0].url
              : "#"
          }
          alt="album"
        />
              : ""}
      </div>
      <div className="artist-info">
        <div className="song-name">
          <span className="info">TRACK: </span>
          {recommendation.name}
        </div>
        <div className="artist-name">
          <span className="info">ARTIST:</span> {recommendation.artists[0].name}
        </div>
        <div className="popularity">
          <span className="info">POPULARITY: </span>
          {recommendation.popularity}
        </div>
        <div className="url">
          <a href={recommendation.external_urls.spotify} target="_blank">
            Listen Here
          </a>
        </div>
      </div>
    </div>
  );
}
