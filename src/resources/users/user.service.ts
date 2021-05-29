import usersRepo from './user.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
import { User } from './user.model';
import { IUser } from '../../types/index';

/**
 * @module userService
 */

/**
 * Get all users
 * @returns {User[]} - Array of users
 */
const getAll = (): Promise<User[]> => usersRepo.getAll();

/**
 * Create user
 * @param {object} userData - Object of user's data
 * @returns {User} - Object of user
 */
const create = (userData: IUser): Promise<User | null> => usersRepo.create(userData);

/**
 * Get user by ID
 * @param {string} id - User ID
 * @returns {User} - Object of user
 */
const get = (id: string): Promise<User | null> => usersRepo.get(id);

/**
 * Remove user by ID
 * @param {string} id - User ID
 * @returns {User} - Object of user
 */
const remove = (id: string): Promise<User | null> => {
  tasksRepo.updateTasksAfterDeletingUser(id);
  return usersRepo.remove(id);
};

/**
 * Update user by ID
 * @param {string} id - User ID
 * @param {object} userData - Object of user's data
 * @returns {User} - Object of user
 */
const update = (id: string, userData: IUser): Promise<User | null> => usersRepo.update(id, userData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
