const User = require("./user.model");
const userRepo = require("../../common/dataBaseInMemory/userDB");

const getAll = async () => userRepo;

const get = async (id) => {
  const targetUsers = userRepo.filter(user => user.id === id);
  return targetUsers[0];
}

const create = async (userData) => {
  const user = new User(userData);
  userRepo.push(user);
  return get(user.id);
}

const remove = async (id) => {
  let userIndex;
  userRepo.forEach((user, index) => {
    if (user.id === id) {
      userIndex = index;
    }
  });
  userRepo.splice(userIndex, 1);
}

const update = async (id, user) => {
  const oldUser = await get(id);
  userRepo[userRepo.indexOf(oldUser)] = { ...oldUser, ...user, id };
  return get(id);
}

module.exports = { 
  getAll,
  create,
  get,
  remove,
  update,
 };
