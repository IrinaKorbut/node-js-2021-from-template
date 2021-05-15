const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = (boardId, taskData) => tasksRepo.create(boardId, taskData);

const get = (id) => tasksRepo.get(id);

const remove = (id) => tasksRepo.remove(id);

const update = (id, taskData) => tasksRepo.update(id, taskData);

module.exports = { 
    getAll,
    create,
    get,
    remove,
    update
};
