const router = require('express').Router( { mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(req.params.boardId, req.body);
  res.status(201).json(task);
})

module.exports = router;