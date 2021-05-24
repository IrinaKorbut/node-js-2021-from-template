const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();

const create = (userData) => usersRepo.create(userData);

const get = (id) => usersRepo.get(id);

const remove = (id) => {
    tasksRepo.updateTasksAfterDeletingUser(id);
    return usersRepo.remove(id)
};

const update = (id, userData) => usersRepo.update(id, userData);

module.exports = { 
    getAll,
    create,
    get,
    remove,
    update,
 };
