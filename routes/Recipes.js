export default function (app) {
  app
    .route('/recipes')
    .get((req, res) => {
      res.send('root');
      console.log("----> Connected to recipes '/recipes'");
    })
    .post((req, res) => {
      res.send('Add a');
    })
    .put((req, res) => {
      res.send('Update');
    });
};
