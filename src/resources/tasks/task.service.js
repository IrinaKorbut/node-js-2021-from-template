const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = (boardId, taskData) => tasksRepo.create(boardId, taskData);

module.exports = { 
    getAll,
    create,
};
