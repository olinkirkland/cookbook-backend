// import express from 'express';
// var router = express.Router();

// router.get('/', (req, res) => {
//   getAllUsers((users) => {
//     res.send(`<pre>${users}</pre>`);
//   });
// });

// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   getUser(id, function (user) {
//     res.send(`<pre>${user}</pre>`);
//   });
// });

import express from 'express';
const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', (req, res) => {
  res.send(`Hello User ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Hello from POST');
});

module.exports = router;
