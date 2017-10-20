const express = require("express");
const { json } = require("body-parser");


const port = 3001;

const app = express();
app.use(json());

app.use(express.static(`${__dirname}/../public/build`))





app.listen(port, () =>
  console.log(`I'm up and running dawg, peep port: ${port}`)
);