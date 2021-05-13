const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const postUser = (userData) => usersRepo.postUser(userData);
const getUser = (id) => usersRepo.getUser(id);

module.exports = { 
    getAll,
    postUser,
    getUser,
 };
