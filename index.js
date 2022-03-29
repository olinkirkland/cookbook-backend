const express = require('express');
const app = express();
const port = 3000;

app.get('/recipe/:id', (req, res) => {
  const recipeId = req.params.id;
  res.send('Recipe ' + recipeId);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// require('dotenv').config();

// var pg = require('pg');

// var conString = process.env.ELEPHANT_SQL_URL;
// var client = new pg.Client(conString);

// client.connect(function (err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }

//   client.query('SELECT * FROM recipe WHERE id = 1', function (err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(JSON.stringify(result.rows[0], null, 2));
//     client.end();
//   });
// });
