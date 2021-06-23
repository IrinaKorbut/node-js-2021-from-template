import { userDB } from '../../common/dataBaseInMemory/userDB';
import { IUser, UserDTO } from '../../types';

const getAll = async (): Promise<Omit <IUser[], 'password'>> => userDB.findMany();

const get = async (id: string): Promise<IUser | 'NOT_FOUND'> => {
  const targetUsers = userDB.findOne(id);
  return targetUsers || 'NOT_FOUND';
};

const create = async (userData: IUser): Promise<IUser> => {
  const newUser = userDB.create(userData);
  const savedUser = userDB.save(newUser);
  return savedUser;
};

const remove = async (id: string): Promise<'NOT_FOUND' | 'DELETED'> => {
  const removedUser = userDB.remove(id);
  return removedUser;
};

const update = async (id: string, user: UserDTO): Promise< IUser | 'NOT_FOUND'> => {
  const updatedUser = userDB.update(id, user);
  return updatedUser;
};

export const usersRepo =  {
  getAll,
  create,
  get,
  remove,
  update,
};
