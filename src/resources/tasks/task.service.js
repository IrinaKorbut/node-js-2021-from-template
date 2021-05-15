const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = (boardId, taskData) => tasksRepo.create(boardId, taskData);

const get = (id) => tasksRepo.get(id);

const remove = (id) => tasksRepo.remove(id);

module.exports = { 
    getAll,
    create,
    get,
    remove,

};
