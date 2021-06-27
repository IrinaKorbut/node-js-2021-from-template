import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import createError from 'http-errors';
import boardsService from './board.service';

const { OK, CREATED, NOT_FOUND, NO_CONTENT, BAD_REQUEST } = StatusCodes;

export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  return res.status(OK).json((boards));
});


router.route('/').post(async (req, res, next) => {
  const { title, columns } = req.body;
  if (!title || !columns ) {
    return next(createError(BAD_REQUEST, `Bad request: you enter not all data`));
  }
  const board = await boardsService.create(req.body);
  if (board) {
    return res.status(CREATED).json(board);
  }
  return next(createError(BAD_REQUEST, `Bad request`));
});

router.route('/:id').get(async (req, res, next) => {
  const board  = await boardsService.get(req.params.id);
  if (board !== 'NOT_FOUND') {
    return res.status(OK).json(board);
  }
  return next(createError(NOT_FOUND, `Board with id: ${req.params.id} not found`));
});

router.route('/:id').delete(async (req, res, next) => {
  const result = await boardsService.remove(req.params.id);
  if (result !== 'NOT_FOUND') {
     return res.status(NO_CONTENT).send({message: 'Board has been deleted.'});
  }
  return next(createError(NOT_FOUND, `Board with id: ${req.params.id} not found`));
});

router.route('/:id').put(async (req, res, next) => {
  const board = await boardsService.update(req.params.id, req.body);
  if (board) {
    return res.status(OK).json(board);
  }
  return next(createError(NOT_FOUND, `Board with id: ${req.params.id} not found`));
});
