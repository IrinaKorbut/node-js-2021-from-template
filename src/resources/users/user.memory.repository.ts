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
  const { password } = userData;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await userRepository.create({
    name: userData.name,
    login: userData.login,
    password: hashPassword
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
  const { password } = user;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUserData = await userRepository.create({
    name: user.name,
    login: user.login,
    password: hashPassword
  });
  const updatedUser = await userRepository.update(id, newUserData);
  return updatedUser.raw;
};

export const usersRepo =  {
  getAll,
  create,
  get,
  remove,
  update,
};
