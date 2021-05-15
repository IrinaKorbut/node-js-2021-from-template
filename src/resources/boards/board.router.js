const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.sendStatus(404);
  }
  
});

router.route('/:id').delete(async (req, res) => {
  const deleted = await boardsService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }  
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  res.status(200).json(board);
})

module.exports = router;
