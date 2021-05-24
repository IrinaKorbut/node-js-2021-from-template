const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

/**
 * Get all users
 * @returns {array<object>} Array of user's objects
 */
const getAll = () => usersRepo.getAll();

/**
 * Create user
 * @param {object} userData - Object of user's data
 * @returns {object} Object of user
 */
const create = (userData) => usersRepo.create(userData);

/**
 * Get user by id
 * @param {string} id - User's id
 * @returns {object} Object of user
 */
const get = (id) => usersRepo.get(id);

/**
 * Remove user by id
 * @param {string} id - User's id
 * @returns {object} Object of user or null
 */
const remove = (id) => {
    tasksRepo.updateTasksAfterDeletingUser(id);
    return usersRepo.remove(id)
};

/**
 * Update user by id
 * @param {string} id - User's id
 * @param {object} userData - Object of user's data
 * @returns {object} Object of user
 */
const update = (id, userData) => usersRepo.update(id, userData);

module.exports = { 
    getAll,
    create,
    get,
    remove,
    update,
 };
