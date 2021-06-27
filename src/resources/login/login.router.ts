import { Router } from 'express';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import { loginService } from './login.service';

const { OK, NOT_FOUND, FORBIDDEN } = StatusCodes;

export const router = Router({ mergeParams: true });

router.post('/', async (req, res, next) => {
  const { login, password } = req.body;
  const token = await loginService.login({ login, password })
  if (token === 'NOT_FOUND') {
    return next(createError(NOT_FOUND, `User not found`));
  }
  if (token === 'FORBIDDEN') {
    return next(createError(FORBIDDEN, `Wrong password.`));
  }
  return res.status(OK).json({token})
});
