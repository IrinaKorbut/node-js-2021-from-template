import { Router } from 'express';
import createError from 'http-errors';
import tasksService from './task.service';
import { Task } from './task.model';
import { Board } from '../boards/board.model';
import boardsService from '../boards/board.service';

export const router = Router({ mergeParams: true });

router.route('/:boardId/tasks').get(async (_req, res) => {
  const tasks: Task[] = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:boardId/tasks').post(async (req, res, next) => {
  const { title, order, description } = req.body;
  const board: Board | null = await boardsService.get(req.params.boardId);
  if (!board) {
    next(createError(404, `Board with id: ${req.params.boardId} not found`));
    return;
  }
  if (!title || order === undefined || !description) {
    next(createError(400, `Bad request: you enter not all data`));
    return;
  }
  const task: Task | null = await tasksService.create(req.params.boardId, req.body);
  if (task) {
    res.status(201).json(task);
  } else {
    next(createError(400, `Bad request`));
  }
});

router.route('/:boardId/tasks/:id').get(async (req, res, next) => {
  const task: Task | null = await tasksService.get(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    next(createError(404, `Task with id: ${req.params.id} not found`));
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res, next) => {
  const deleted: Task | null = await tasksService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    next(createError(404, `Task with id: ${req.params.id} not found`));
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res, next) => {
  const task: Task | null = await tasksService.update(req.params.id, req.body);
  if (task) {
    res.status(200).json(task);
  } else {
    next(createError(404, `Task with id: ${req.params.id} not found`));
  }
});
