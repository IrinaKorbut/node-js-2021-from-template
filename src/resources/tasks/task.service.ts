import tasksRepo from './task.memory.repository';
import { Task } from './task.model';
import { ITask } from '../../types/index';

const getAll = (): Promise<Task[]> => tasksRepo.getAll();

const create = (boardId: string, taskData: ITask): Promise<Task | null> => tasksRepo.create(boardId, taskData);

const get = (id: string): Promise<Task | null> => tasksRepo.get(id);

const remove = (id: string): Promise<Task | null> => tasksRepo.remove(id);

const update = (id: string, taskData: ITask): Promise<Task | null> => tasksRepo.update(id, taskData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
