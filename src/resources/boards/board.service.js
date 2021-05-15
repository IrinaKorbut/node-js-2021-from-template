const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();

const create = (boardData) => boardsRepo.create(boardData);

const get = (id) => boardsRepo.get(id);

const remove = (id) => {    
    tasksRepo.clearTasksAfterDeletingBoard(id);
    return boardsRepo.remove(id);
};

const update = (id, boardData) => boardsRepo.update(id, boardData);

module.exports = { 
    getAll,
    create,
    get,
    remove,
    update
 };
