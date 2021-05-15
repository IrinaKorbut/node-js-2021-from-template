const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = (boardId, taskData) => tasksRepo.create(boardId, taskData);

const get = (id) => tasksRepo.get(id);

module.exports = { 
    getAll,
    create,
    get,
};
