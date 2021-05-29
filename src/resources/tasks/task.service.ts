import tasksRepo from './task.memory.repository';
import { Task } from './task.model';
import { ITask } from '../../types/index';

/**
 * @module taskService
 */

/**
 * Get all tasks
 * @returns {Task[]} - Array of task's objects
 */
const getAll = (): Promise<Task[]> => tasksRepo.getAll();

/**
 * Create task
 * @param {string} boardId - Board ID
 * @param {object} taskData - Object of task's data
 * @returns {Task} - Object of task
 */
const create = (boardId: string, taskData: ITask): Promise<Task | null> => tasksRepo.create(boardId, taskData);

/**
 * Get task by ID
 * @param {string} id - Task ID
 * @returns {Task} - Object of task
 */
const get = (id: string): Promise<Task | null> => tasksRepo.get(id);

/**
 * Remove task by ID
 * @param {string} id - Task ID
 * @returns {Task} - Object of task
 */
const remove = (id: string): Promise<Task | null> => tasksRepo.remove(id);

/**
 * Update task by ID
 * @param {string} id - Task ID
 * @param {object} taskData - Object of task's data
 * @returns {Task} - Object of task
 */
const update = (id: string, taskData: ITask): Promise<Task | null> => tasksRepo.update(id, taskData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
