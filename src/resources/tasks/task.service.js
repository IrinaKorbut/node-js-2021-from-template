const tasksRepo = require('./task.memory.repository');

/**
 * @module taskService
 */

/**
 * Get all tasks
 * @returns {Task[]} Array of task's objects
 */
const getAll = () => tasksRepo.getAll();

/**
 * Create task
 * @param {string} boardId - Board ID
 * @param {object} taskData - Object of task's data
 * @returns {Task} - Object of task
 */
const create = (boardId, taskData) => tasksRepo.create(boardId, taskData);

/**
 * Get task by ID
 * @param {string} id - Task ID
 * @returns {Task} - Object of task
 */
const get = (id) => tasksRepo.get(id);

/**
 * Remove task by ID
 * @param {string} id - Task ID
 * @returns {Task} - Object of task
 */
const remove = (id) => tasksRepo.remove(id);

/**
 * Update task by ID
 * @param {string} id - Task ID
 * @param {object} taskData - Object of task's data
 * @returns {Task} - Object of task
 */
const update = (id, taskData) => tasksRepo.update(id, taskData);

module.exports = { 
    getAll,
    create,
    get,
    remove,
    update
};
