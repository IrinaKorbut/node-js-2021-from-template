const taskDB = require('../../common/dataBaseInMemory/taskDB');
const Task = require('./task.model');

/**
 * @module taskMemoryRepo
 */

/**
 * Get all tasks
 * @returns {Promise<Task[]>} - Promise with array of tasks
 */
const getAll = async () => taskDB;

/**
 * Get task by ID
 * @param {string} id - Task ID
 * @returns {Promise<Task>} - Promise with task object
 */
const get = async (id) => {
  const targetTask = taskDB.find(task => task.id === id);
  return targetTask;
}

/**
 * Create task
 * @param {string} boardId - Board ID
 * @param {object} taskData - Object of task's data
 * @returns {Promise<Task>} - Promise with task object
 */
const create = async (boardId, taskData) => {
  const taskDataDuplicate = { ...taskData }
  taskDataDuplicate.boardId = taskData.boardId ? taskData.boardId : boardId;
  const task = new Task(taskDataDuplicate);
  taskDB.push(task);
  return get(task.id);
}

/**
 * Remove task by id
 * @param {string} id  - Task ID
 * @returns {Promise<Task> | object} - Promise with task object or null
 */
const remove = async (id) => {
  const task = await get(id);
  const taskIndex = taskDB.indexOf(task);
  return taskIndex > -1 ? taskDB.splice(taskIndex, 1) : null;
}

/**
 * Update task by id
 * @param {string} id  - Task ID
 * @param {object} taskData - Object of task's data
 * @returns {Promise<Task>} - Promise with task object
 */
const update = async (id, taskData) => {
  const oldTask = await get(id);
  taskDB[taskDB.indexOf(oldTask)] = { ...oldTask, ...taskData, id};
  return get(id);
}

/**
 * Delete all task from board after deleting this board
 * @param {string} boardId - Board ID
 * @returns {void}
 */
const clearTasksAfterDeletingBoard = async (boardId) => {
  for (let i = 0; i < taskDB.length; i += 1) {
    if (taskDB[i].boardId === boardId) {
      taskDB.splice(i, 1)
	    i -= 1
    }
  }
}

/**
 * After deleting user set "null" for all his tasks 
 * @param {string} userId - User ID
 * @returns {void}
 */
const updateTasksAfterDeletingUser = async (userId) => {
  taskDB.forEach(task => {
    const taskCopy = task;
    if (taskCopy.userId === userId) {
      taskCopy.userId = null;
    }
  })
}

module.exports = { 
  getAll,
  create,
  get,
  remove,
  update,
  clearTasksAfterDeletingBoard,
  updateTasksAfterDeletingUser
 };
