import express, { Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { IRequest } from './types';
import { logger } from './logger';
import { router as userRouter } from './resources/users/user.router';
import { router as  boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
const { requestLogger, errorLogger, unhandledRejectionLogger, unhandledExceptionLogger } = logger;

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(requestLogger);

app.use('/', (req: IRequest, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);

app.use(errorLogger);

process
  .on('unhandledRejection', unhandledRejectionLogger)
  .on('uncaughtException', unhandledExceptionLogger);


// throw Error('Oops!');
// Promise.reject(Error('Oops!'));
// eslint-disable-next-line no-unreachable
export default app;
