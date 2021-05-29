import { Router } from 'express';
import tasksService from './task.service';
import { Task } from './task.model';

export const router = Router({ mergeParams: true });

router.route('/:boardId/tasks').get(async (_req, res) => {
  const tasks: Task[] = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task: Task | null = await tasksService.create(req.params.boardId, req.body);
  res.status(201).json(task);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const task: Task | null = await tasksService.get(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  const deleted: Task | null = await tasksService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const task: Task | null = await tasksService.update(req.params.id, req.body);
  res.status(200).json(task);
});
