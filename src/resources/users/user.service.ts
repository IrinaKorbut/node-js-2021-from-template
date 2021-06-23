import { usersRepo } from './user.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
// import { User } from './user.model';
import { IUser, UserDTO } from '../../types/index';

const getAll = (): Promise<Omit <IUser[], 'password'>> => usersRepo.getAll();

const create = (userData: IUser): Promise<IUser> => usersRepo.create(userData);

const get = (id: string): Promise<IUser | 'NOT_FOUND'> => usersRepo.get(id);

const remove = (id: string): Promise<'NOT_FOUND' | 'DELETED'> => {
  tasksRepo.updateTasksAfterDeletingUser(id);
  return usersRepo.remove(id);
};

const update = (id: string, userData: UserDTO): Promise<IUser | 'NOT_FOUND'> => usersRepo.update(id, userData);

export const usersService = {
  getAll,
  create,
  get,
  remove,
  update,
};
