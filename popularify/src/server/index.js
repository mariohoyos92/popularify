const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const { getGenres, getRecommendations } = require("./controller");

const port = 3001;

const app = express();
app.use(express.static(`${__dirname}/../../popularify/build`));
app.use(json());
app.use(cors());

app.get(`/api/genres`, getGenres);

app.get(`/api/test/:genre/:popularity`, getRecommendations);

app.listen(port, () =>
  console.log(`I'm up and running dawg, peep port: ${port}`)
);
