const User = require("./user.model");
const userDB = require("../../common/dataBaseInMemory/userDB");

/**
 * Get all users
 * @returns {array<object>} Array of user's objects
 */
const getAll = async () => userDB;

/**
 * Get user by id
 * @param {string} id - User's id
 * @returns {object} Object of user
 */
const get = async (id) => {
  const targetUsers = userDB.find(user => user.id === id);
  return targetUsers;
}

/**
 * Create user
 * @param {object} userData - Object of user's data
 * @returns {object} Object of user
 */
const create = async (userData) => {
  const user = new User(userData);
  userDB.push(user);
  return get(user.id);
}

/**
 * Remove user by id
 * @param {string} id - User's id
 * @returns {object} Object of user or null
 */
const remove = async (id) => {
  const board = await get(id);
  const userIndex = userDB.indexOf(board);
  return userIndex > -1 ? userDB.splice(userIndex, 1) : null;
}

/**
 * Update user by id
 * @param {string} id - User's id
 * @param {object} userData - Object of user's data
 * @returns {object} Object of user
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
