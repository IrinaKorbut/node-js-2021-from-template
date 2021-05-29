import { Router } from 'express';
import { User } from './user.model';
import usersService from './user.service';

export const router = Router();

router.route('/').get(async (_req, res) => {
  const users: User[] = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user: User | null = await usersService.create(req.body);
  if (user) {
    res.status(201).json(User.toResponse(user));
  } else {
    res.sendStatus(404);
  }  
});

router.route('/:id').get(async (req, res) => {
  const user: User | null = await usersService.get(req.params.id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').delete(async (req, res) => {
  const deleted: User | null = await usersService.remove(req.params.id);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  const user: User | null = await usersService.update(req.params.id, req.body);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.sendStatus(404);
  }
});
