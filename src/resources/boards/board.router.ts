import { Router } from 'express';
import createError from 'http-errors';
import boardsService from './board.service';
import { Board } from './board.model';

export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const boards: Board[] = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res, next) => {
  const { title, columns } = req.body;
  if (!title || !columns ) {
    next(createError(400, `Bad request: you enter not all data`));
    return;
  }
  const board: Board | null = await boardsService.create(req.body);
  if (board) {
    res.status(201).json(board);
  } else {
    next(createError(400, `Bad request`));
  }
});

router.route('/:id').get(async (req, res, next) => {
  const board: Board | null = await boardsService.get(req.params.id);
  if (board) {
    res.status(200).json(board);
  } else {
    next(createError(404, `Board with id: ${req.params.id} not found`));
  }
});

router.route('/:id').delete(async (req, res, next) => {
  const deleted: Board | null = await boardsService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    next(createError(404, `Board with id: ${req.params.id} not found`));
  }
});

router.route('/:id').put(async (req, res, next) => {
  const board: Board | null = await boardsService.update(req.params.id, req.body);
  if (board) {
    res.status(200).json(board);
  } else {
    next(createError(404, `Board with id: ${req.params.id} not found`));
  }
});
