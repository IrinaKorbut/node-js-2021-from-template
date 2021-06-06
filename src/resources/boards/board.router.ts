import { Router } from 'express';
import boardsService from './board.service';
import { Board } from './board.model';

export const router = Router();

router.route('/').get(async (_req, res) => {
  const boards: Board[] = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board: Board | null = await boardsService.create(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  const board: Board | null = await boardsService.get(req.params.id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').delete(async (req, res) => {
  const deleted: Board | null = await boardsService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  const board: Board | null = await boardsService.update(req.params.id, req.body);
  res.status(200).json(board);
});
