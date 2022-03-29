import 'dotenv/config';
import express from 'express';
const app = express();
const port = 8000;

var conString = process.env.ELEPHANT_SQL_URL;
// var client = new pg.Client(conString);

// client.connect(function (err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
// });

function getRecipe(slug, callback) {
  const query = `SELECT * FROM recipe WHERE id = ${1}`;
  console.log(query);
  client.query(query, function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }

    const r = JSON.stringify(result.rows[0], null, 2);
    client.end();
    callback(r);
  });
}

app
  .route('/')
  .get((req, res) => {
    res.send('root');
    console.log("----> Connected to root '/' route");
  })
  .post((req, res) => {
    res.send('Add a');
  })
  .put((req, res) => {
    res.send('Update');
  });

app.listen(port, () => {
  console.log(`Express Server on port ${port}`);
});
