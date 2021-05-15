const User = require("./user.model");
const userDB = require("../../common/dataBaseInMemory/userDB");

const getAll = async () => userDB;

const get = async (id) => {
  const targetUsers = userDB.find(user => user.id === id);
  return targetUsers;
}

const create = async (userData) => {
  const user = new User(userData);
  userDB.push(user);
  return get(user.id);
}

const remove = async (id) => {
  const board = await get(id);
  const userIndex = userDB.indexOf(board);
  return userIndex > -1 ? userDB.splice(userIndex, 1) : null;
}

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
