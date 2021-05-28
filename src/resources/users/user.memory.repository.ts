const User = require("./user.model");
const userDB = require("../../common/dataBaseInMemory/userDB");

/**
 * @module userMemoryRepo
 */

/**
 * Get all users
 * @returns {Promise<User[]>} - Promise with array of users
 */
const getAll = async () => userDB;

/**
 * Get user by id
 * @param {string} id - User ID
 * @returns {Promise<User>} - Promise with user object
 */
const get = async (id) => {
  const targetUsers = userDB.find(user => user.id === id);
  return targetUsers;
}

/**
 * Create user
 * @param {object} userData - Object of user's data
 * @returns {Promise<User>} - Promise with User object
 */
const create = async (userData) => {
  const user = new User(userData);
  userDB.push(user);
  return get(user.id);
}

/**
 * Remove user by ID
 * @param {string} id - User ID
 * @returns {Promise<User> | object} - Promise with User object or null
 */
const remove = async (id) => {
  const board = await get(id);
  const userIndex = userDB.indexOf(board);
  return userIndex > -1 ? userDB.splice(userIndex, 1) : null;
}

/**
 * Update user by ID
 * @param {string} id - User ID
 * @param {object} userData - Object of user's data
 * @returns {Promise<User>} - Promise with User object
 */
const update = async (id, user) => {
  const oldUser = await get(id);
  userDB[userDB.indexOf(oldUser)] = { ...oldUser, ...user, id };
  return get(id);
}

module.exports = { 
  getAll,
  create,
  get,
  remove,
  update,
 };
