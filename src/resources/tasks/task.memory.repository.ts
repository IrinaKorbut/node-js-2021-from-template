import { taskDB } from '../../common/dataBaseInMemory/taskDB';
import { Task } from './task.model';
import { ITask } from '../../types/index';

/**
 * @module taskMemoryRepo
 */

/**
 * Get all tasks
 * @returns {Promise<Task[]>} - Promise with array of tasks
 */
const getAll = async (): Promise<Task[]> => taskDB;

/**
 * Get task by ID
 * @param {string} id - Task ID
 * @returns {Promise<Task>} - Promise with task object
 */
const get = async (id: string): Promise<Task | null> => {
  const targetTask = taskDB.find((task) => task.id === id);
  return targetTask || null;
};

/**
 * Create task
 * @param {string} boardId - Board ID
 * @param {object} taskData - Object of task's data
 * @returns {Promise<Task>} - Promise with task object
 */
const create = async (boardId: string, taskData: ITask): Promise<Task | null> => {
  const taskDataDuplicate = { ...taskData };
  taskDataDuplicate.boardId = taskData.boardId ? taskData.boardId : boardId;
  const task = new Task(taskDataDuplicate);
  taskDB.push(task);
  const createdTask = await get(task.id);
  return createdTask || null;
};

/**
 * Remove task by id
 * @param {string} id  - Task ID
 * @returns {Promise<Task> | object} - Promise with task object or null
 */
const remove = async (id: string): Promise<Task | null> => {
  const task = await get(id);
  let taskIndex = -1;
  if (task) {
    taskIndex = taskDB.indexOf(task);
  }
  const removedTask = taskDB.splice(taskIndex, 1)[0]
  return removedTask || null;
};

/**
 * Update task by id
 * @param {string} id  - Task ID
 * @param {object} taskData - Object of task's data
 * @returns {Promise<Task>} - Promise with task object
 */
const update = async (id: string, taskData: ITask): Promise<Task | null> => {
  const oldTask = await get(id);
  if (oldTask) {
    taskDB[taskDB.indexOf(oldTask)] = { ...oldTask, ...taskData, id };
  }
  const updatedTask = await get(id);
  return updatedTask || null;
};

/**
 * Delete all task from board after deleting this board
 * @param {string} boardId - Board ID
 * @returns {void}
 */
const clearTasksAfterDeletingBoard = async (boardId: string): Promise<void> => {
  for (let i = 0; i < taskDB.length; i += 1) {
    if (taskDB[i]?.boardId === boardId) {
      taskDB.splice(i, 1);
      i -= 1;
    }
  }
};

/**
 * After deleting user set "null" for all his tasks
 * @param {string} userId - User ID
 * @returns {void}
 */
const updateTasksAfterDeletingUser = async (userId: string): Promise<void> => {
  taskDB.forEach((task) => {
    const taskCopy = task;
    if (taskCopy.userId === userId) {
      taskCopy.userId = null;
    }
  });
};

export default {
  getAll,
  create,
  get,
  remove,
  update,
  clearTasksAfterDeletingBoard,
  updateTasksAfterDeletingUser,
};
