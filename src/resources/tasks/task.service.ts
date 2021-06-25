import tasksRepo from './task.memory.repository';
import { Task } from '../../entities/task';

const getAll = (): Promise<Task[]> => tasksRepo.getAll();

const create = (taskData: Task, boardID: string): Promise<Task> => tasksRepo.create(taskData, boardID);

const get = (id: string): Promise<Task | 'NOT_FOUND'> => tasksRepo.get(id);

const remove = (id: string): Promise<'NOT_FOUND' | 'DELETED'> => tasksRepo.remove(id);

const update = (id: string, taskData: Task): Promise<Task | 'NOT_FOUND'> => tasksRepo.update(id, taskData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
