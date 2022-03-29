export default function (app) {
  app
    .route('/users')
    .get((req, res) => {
      res.send('root');
      console.log("----> Connected to users '/users'");
    })
    .post((req, res) => {
      res.send('Add a');
    })
    .put((req, res) => {
      res.send('Update');
    });
}
