const User = require("./user.model");

const userRepo = []

const getAll = async () => userRepo;

const getUser = async (id) => {
  let targetUser = {};
  userRepo.forEach(user => {
    if (user.id === id) {
      targetUser = user
    }
  })
  return targetUser;
}

const postUser = async (userData) => {
  const user = new User(userData);
  userRepo.push(user);
  return user;
}

module.exports = { 
  getAll,
  postUser,
  getUser,
 };
