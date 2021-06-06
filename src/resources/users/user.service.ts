import usersRepo from './user.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
import { User } from './user.model';
import { IUser } from '../../types/index';

const getAll = (): Promise<User[]> => usersRepo.getAll();

const create = (userData: IUser): Promise<User | null> => usersRepo.create(userData);

const get = (id: string): Promise<User | null> => usersRepo.get(id);

const remove = (id: string): Promise<User | null> => {
  tasksRepo.updateTasksAfterDeletingUser(id);
  return usersRepo.remove(id);
};

const update = (id: string, userData: IUser): Promise<User | null> => usersRepo.update(id, userData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
