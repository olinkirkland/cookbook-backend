export default function (app) {
  app
    .route('/')
    .get((req, res) => {
      res.send('recipes');
      console.log("----> Connected to recipes '/recipes'");
    })
    .post((req, res) => {
      res.send('Add');
    })
    .put((req, res) => {
      res.send('Update');
    });
};
