const request = require("request");

const { publishable, secret } = require("../config");
let token = "";

// The block of code below allows me to acquire a token to access the Spotify API and stores it in the variable "token" in order to make calls below.
var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " + new Buffer(publishable + ":" + secret).toString("base64")
  },
  form: {
    grant_type: "client_credentials"
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // use the access token to access the Spotify Web API
    token = body.access_token;
  }
});

module.exports = {
  getGenres: (req, res) => {
    request.get(
      {
        url: `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
        headers: { Authorization: "Bearer " + token },
        json: true
      },
      (error, response, body) => {
        res.json(body);
      }
    );
  },
  getRecommendations: (req, res) => {
    request.get(
      {
        url: `https://api.spotify.com/v1/recommendations?seed_genres=${
          req.params.genre
        }&target_popularity=${req.params.popularity}`,
        headers: { Authorization: "Bearer " + token },
        json: true
      },
      (error, response, body) => {
        res.json(body);
      }
    );
  }
};
