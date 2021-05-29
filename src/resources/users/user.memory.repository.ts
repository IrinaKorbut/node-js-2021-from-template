import { User } from './user.model';
import { userDB } from '../../common/dataBaseInMemory/userDB';
import { IUser } from '../../types';

/**
 * @module userMemoryRepo
 */

/**
 * Get all users
 * @returns {Promise<User[]>} - Promise with array of users
 */
const getAll = async (): Promise<User[]> => userDB;

/**
 * Get user by id
 * @param {string} id - User ID
 * @returns {Promise<User>} - Promise with user object
 */
const get = async (id: string): Promise<User | null> => {
  const targetUsers = userDB.find((user) => user.id === id);
  return targetUsers || null;
};

/**
 * Create user
 * @param {object} userData - Object of user's data
 * @returns {Promise<User>} - Promise with User object
 */
const create = async (userData: IUser): Promise<User | null> => {
  const user = new User(userData);
  userDB.push(user);
  const createdUser = await get(user.id);
  return createdUser || null;
};

/**
 * Remove user by ID
 * @param {string} id - User ID
 * @returns {Promise<User> | object} - Promise with User object or null
 */
const remove = async (id: string): Promise<User | null> => {
  const user = await get(id);
  let userIndex = -1;
  if (user) {
    userIndex = userDB.indexOf(user);
  }
  const removedUser = userDB.splice(userIndex, 1)[0];
  return removedUser || null;
};

/**
 * Update user by ID
 * @param {string} id - User ID
 * @param {object} userData - Object of user's data
 * @returns {Promise<User>} - Promise with User object
 */
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
