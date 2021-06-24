import { Router } from 'express';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import { User } from './user.model';
import { usersService } from './user.service';

const { OK, CREATED, NOT_FOUND, NO_CONTENT, BAD_REQUEST } = StatusCodes;
export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  return res.status(OK).json(users.map(User.toResponse));
});

router.route('/').post(async (req, res, next) => {
  const { name, login, password } = req.body;
  if (!name || !login || !password) {
    return next(createError(BAD_REQUEST, `Bad request: you enter not all data`));
  }
  const user = await usersService.create(req.body);
  if (user) {
    return res.status(CREATED).json(User.toResponse(user));
  }
    return next(createError(BAD_REQUEST, `Bad request`));
});

router.route('/:id').get(async (req, res, next) => {
  const user = await usersService.get(req.params.id);
  if (user !== "NOT_FOUND") {
    return res.status(OK).json(User.toResponse(user));
  }
  return next(createError(NOT_FOUND, `User with id: ${req.params.id} not found`));
});

router.route('/:id').delete(async (req, res, _next) => {
  const result = await usersService.remove(req.params.id);
  if (result === 'NOT_FOUND') {
    return res.status(NOT_FOUND).send({message: 'User not found!'});
  }
  return res.status(NO_CONTENT).send({message: 'User has been deleted.'});
});

router.route('/:id').put(async (req, res, next) => {
  const user = await usersService.update(req.params.id, req.body);
  if (user !== 'NOT_FOUND') {
    return res.status(OK).json(User.toResponse(user));
  }
  return next(createError(NOT_FOUND, `User with id: ${req.params.id} not found`));
});
