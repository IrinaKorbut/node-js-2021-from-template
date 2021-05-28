const Task = require('../../resources/tasks/task.model')

/**
 * Task object definition
 * @typedef {object} Task
 * @property {string} title - Task title
 * @property {number} order - Task order
 * @property {string} description - Task description
 * @property {string} userId - User ID
 * @property {string} boardId - Board ID
 * @property {string} columnId - Column ID
 */

/**
 * @type {Task[]}
 */
const taskDB = [];

taskDB.push(new Task())
taskDB.push(new Task())
taskDB.push(new Task())

module.exports = taskDB;