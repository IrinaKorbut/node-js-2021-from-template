const router = require('express').Router( { mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(req.params.boardId, req.body);
  res.status(201).json(task);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.sendStatus(404);
  }  
});

router.route('/:id').delete(async (req, res) => {
  const deleted = await tasksService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }  
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);
  res.status(200).json(task);
})

module.exports = router;