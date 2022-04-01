import 'dotenv/config';
import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;

var router = express.Router();

app.route('/').get((req, res) => {
  res.send('root');
  console.log("----> Connected to root '/' route");
});

// Recipes
app.route('/recipes').get((req, res) => {
  getAllRecipes((recipes) => {
    res.send(`<pre>${JSON.stringify(recipes, null, 2)}</pre>`);
  });
});
app.route('/recipes/:slug').get((req, res) => {
  const slug = req.params.slug;
  getRecipe(slug, function (recipe) {
    res.send(`<pre>${JSON.stringify(recipe, null, 2)}</pre>`);
  });
});

// Users
app.route('/users').get((req, res) => {
  getAllUsers((users) => {
    res.send(`<pre>${JSON.stringify(users, null, 2)}</pre>`);
  });
});
app.route('/users/:id').get((req, res) => {
  const id = req.params.id;
  getUser(id, function (user) {
    res.send(`<pre>${JSON.stringify(user, null, 2)}</pre>`);
  });
});

app.listen(port, () => {
  console.log(`Express Server on port ${port}`);
});

// TODO: Migrate below to recipes.js or a Util class of some sort

// Connect to the database
var conString = process.env.ELEPHANT_SQL_URL;
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error('Could not connect to postgres', err);
  } else {
    console.log('Connected to postgres');
  }
});

function getAllUsers(callback) {
  client.query(`SELECT * FROM author`, function (err, result) {
    if (err) return console.error('Error running query', err);

    callback(result.rows);
  });
}

function getUser(id, callback) {
  const query = `SELECT * FROM author WHERE id = ${id}`;
  console.log(query);
  client.query(query, function (err, result) {
    if (err) {
      return console.error('Error running query', err);
    }

    callback(result.rows[0]);
  });
}

// Returns all recipe slugs
function getAllRecipes(callback) {
  client.query(`SELECT * FROM recipes`, function (err, result) {
    if (err) return console.error('Error running query', err);

    callback(result.rows);
  });
}

// Get an individual recipe by its slug
function getRecipe(slug, callback) {
  // const query = `SELECT * FROM recipe WHERE slug = "${slug}"`;
  const query = `SELECT * FROM recipe WHERE id = ${1}`;
  console.log(query);
  client.query(query, function (err, result) {
    if (err) return console.error('Error running query', err);

    callback(result.rows[0]);
  });
}
