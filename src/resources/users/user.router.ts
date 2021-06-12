import { Router } from 'express';
import createError from 'http-errors';
import { User } from './user.model';
import usersService from './user.service';

export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const users: User[] = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res, next) => {
  const { name, login, password } = req.body;
  if (!name || !login || !password) {
    next(createError(400, `Bad request: you enter not all data`));
    return;
  }
  const user: User | null = await usersService.create(req.body);
  if (user) {
    res.status(201).json(User.toResponse(user));
  } else {
    next(createError(400, `Bad request`));
  }
});

router.route('/:id').get(async (req, res, next) => {
  const user: User | null = await usersService.get(req.params.id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    next(createError(404, `User with id: ${req.params.id} not found`));
  }
});

router.route('/:id').delete(async (req, res, next) => {
  const deleted: User | null = await usersService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    next(createError(404, `User with id: ${req.params.id} not found`));
  }
});

router.route('/:id').put(async (req, res, next) => {
  const user: User | null = await usersService.update(req.params.id, req.body);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    next(createError(404, `User with id: ${req.params.id} not found`));
  }
});
