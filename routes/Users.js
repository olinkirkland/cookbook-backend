export default function (app) {
  app
    .route('/users')
    .get((req, res) => {
      res.send('users');
      console.log("----> Connected to users '/users'");
    })
    .post((req, res) => {
      res.send('Add');
    })
    .put((req, res) => {
      res.send('Update');
    });
}
