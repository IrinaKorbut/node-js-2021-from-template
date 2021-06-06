import { User } from './user.model';
import { userDB } from '../../common/dataBaseInMemory/userDB';
import { IUser } from '../../types';

const getAll = async (): Promise<User[]> => userDB;

const get = async (id: string): Promise<User | null> => {
  const targetUsers = userDB.find((user) => user.id === id);
  return targetUsers || null;
};

const create = async (userData: IUser): Promise<User | null> => {
  const user = new User(userData);
  userDB.push(user);
  const createdUser = await get(user.id);
  return createdUser || null;
};

const remove = async (id: string): Promise<User | null> => {
  const user = await get(id);
  let userIndex = -1;
  if (user) {
    userIndex = userDB.indexOf(user);
  }
  const removedUser = userDB.splice(userIndex, 1)[0];
  return removedUser || null;
};

const update = async (id: string, user: IUser): Promise<User | null> => {
  const oldUser = await get(id);
  if (oldUser) {
    userDB[userDB.indexOf(oldUser)] = { ...oldUser, ...user, id };
  }
  const updatedUser = await get(id);
  return updatedUser || null;
};

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
