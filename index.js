const express = require("express");
const app = express();
const port = 8000;

let router = express.Router();

require("dotenv").config();

var pg = require("pg");

var conString = process.env.ELEPHANT_SQL_URL;
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
});

function getRecipe(slug) {
  client.connect(function (err) {
    if (err) {
      return console.error("could not connect to postgres", err);
    }
  });

  client.query(
    `SELECT * FROM recipe WHERE slug = ${rotweinkuchen}`,
    function (err, result) {
      if (err) {
        return console.error("error running query", err);
      }

      // console.log(JSON.stringify(result.rows[0], null, 2));
      client.end();
    }
  );
}

app
  .route("/")
  .get((req, res) => {
    res.send("root");
    console.log("----> Connected to root '/' route");
  })
  .post((req, res) => {
    res.send("Add a");
  })
  .put((req, res) => {
    res.send("Update");
  });

app.listen(port, () => {
  console.log(`Express Server on port ${port}`);
});

/* app.get("/recipe/:id", (req, res) => {
  const recipeId = req.params.id;
  res.send("Recipe " + getRecipe(recipeId));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); */
