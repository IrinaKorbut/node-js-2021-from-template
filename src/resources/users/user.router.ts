import { Router } from 'express';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import { User } from './user.model';
import { usersService } from './user.service';

const { OK, CREATED, NOT_FOUND, NO_CONTENT } = StatusCodes;
export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  return res.status(OK).json(users.map(User.toResponse));
});

router.route('/').post(async (req, res, next) => {
  const { name, login, password } = req.body;
  if (!name || !login || !password) {
    next(createError(400, `Bad request: you enter not all data`));
    return;
  }
  const user = await usersService.create(req.body);
  if (user) {
    res.status(CREATED).json(User.toResponse(user));
  } else {
    next(createError(400, `Bad request`));
  }
});

router.route('/:id').get(async (req, res, _next) => {
  const user = await usersService.get(req.params.id);
  if (user !== "NOT_FOUND") {
    res.status(OK).json(User.toResponse(user));
  } else {
    res.status(NOT_FOUND).send({message: 'Student no found!'});
    // next(createError(404, `User with id: ${req.params.id} not found`));
  }
});

router.route('/:id').delete(async (req, res, _next) => {
  const result = await usersService.remove(req.params.id);
  if (result === 'NOT_FOUND') {
    // res.sendStatus(204);
    res.status(NOT_FOUND).send({message: 'Student no found!'});
  } else {
    res.status(NO_CONTENT).send({message: 'Student has been deleted.'});
    // next(createError(404, `User with id: ${req.params.id} not found`));
  }
});

router.route('/:id').put(async (req, res, _next) => {
  const user = await usersService.update(req.params.id, req.body);
  if (user !== 'NOT_FOUND') {
    res.status(OK).json(User.toResponse(user));
  } else {
    res.status(NOT_FOUND).send({message: 'Student no found!'});
    // next(createError(404, `User with id: ${req.params.id} not found`));
  }
});
