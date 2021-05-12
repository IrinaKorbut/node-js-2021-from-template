const boardsRepo = require('./board.memory.repositury');

const getAll = () => boardsRepo.getAll();

module.exports = { getAll };
