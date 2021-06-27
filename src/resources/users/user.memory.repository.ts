import bcrypt from "bcrypt";
import { getRepository} from 'typeorm';
import { UserDTO } from '../../types';
import User from '../../entities/user'

const getAll = async (): Promise<Omit <User[], 'password'>> => {
  const userRepository = getRepository(User);
  const users = await userRepository.find({ where: {} });
  return users;
};

const get = async (id: string): Promise<User | 'NOT_FOUND'> => {
  const userRepository = getRepository(User);
  const targetUser = await userRepository.findOne(id);
  return targetUser || 'NOT_FOUND';
};

const create = async (userData: User): Promise<User> => {
  const userRepository = getRepository(User);
  const newUser = await userRepository.create({
    name: userData.name,
    login: userData.login,
    password: bcrypt.hashSync(userData.password, 8)
  });
  const savedUser = await userRepository.save(newUser);
  return savedUser;
};

const remove = async (id: string): Promise<'NOT_FOUND' | 'DELETED'> => {
  const userRepository = getRepository(User);
  const removedUser = await userRepository.delete(id);
  if (removedUser.affected) return 'DELETED';
  return 'NOT_FOUND';
};

const update = async (id: string, user: UserDTO): Promise<User | 'NOT_FOUND'> => {
  const userRepository = getRepository(User);
  const updatedUser = await userRepository.update(id, user);
  return updatedUser.raw;
};

export const usersRepo =  {
  getAll,
  create,
  get,
  remove,
  update,
};
