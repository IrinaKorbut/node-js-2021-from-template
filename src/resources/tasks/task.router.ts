import { Router } from 'express';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import tasksService from './task.service';
import boardsService from '../boards/board.service';

const { OK, CREATED, NOT_FOUND, NO_CONTENT, BAD_REQUEST } = StatusCodes;

export const router = Router({ mergeParams: true });

router.route('/:boardId/tasks').get(async (_req, res) => {
  const tasks = await tasksService.getAll();
  return res.status(OK).json((tasks));
});

router.route('/:boardId/tasks').post(async (req, res, next) => {
  const { title, order, description} = req.body;
  const board = await boardsService.get(req.params.boardId);
  if (!board) {
    return next(createError(NOT_FOUND, `Board with id: ${req.params.boardId} not found`));
  }
  if (!title || order === undefined || !description) {
    return next(createError(BAD_REQUEST, `Bad request: you enter not all data`));
  }
  const task = await tasksService.create(req.body, req.params.boardId);
  if (task) {
    return res.status(CREATED).json(task);
  }
  return next(createError(BAD_REQUEST, `Bad request`));
});

router.route('/:boardId/tasks/:id').get(async (req, res, next) => {
  const task = await tasksService.get(req.params.id);
  if (task !== 'NOT_FOUND') {
    return res.status(OK).json(task);
  }
  return next(createError(NOT_FOUND, `Task with id: ${req.params.id} not found`));
});

router.route('/:boardId/tasks/:id').delete(async (req, res, next) => {
  const result = await tasksService.remove(req.params.id);
  if (result !== 'NOT_FOUND') {
    return res.status(NO_CONTENT).send({message: 'Task has been deleted.'});
  }
  return next(createError(NOT_FOUND, `Task with id: ${req.params.id} not found`));
});

router.route('/:boardId/tasks/:id').put(async (req, res, next) => {
  const task = await tasksService.update(req.params.id, req.body);
  if (task !== 'NOT_FOUND') {
    return res.status(OK).json(task);
  }
  return next(createError(NOT_FOUND, `Task with id: ${req.params.id} not found`));
});
