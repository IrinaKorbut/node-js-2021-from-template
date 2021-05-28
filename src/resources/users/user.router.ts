const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(201).json((User.toResponse(user)));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  if (user) {
    res.status(200).json((User.toResponse(user)));
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').delete(async (req, res) => {
  const deleted = await usersService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res.status(200).json((User.toResponse(user)));
});

module.exports = router;
