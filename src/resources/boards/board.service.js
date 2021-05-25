const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

/**
 * @module boardService
 */

/**
 * Get all boards
 * @returns {Board[]} - Array of boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Create board
 * @param {object} boardData - Object of board's data
 * @returns {Board} - Object of board
 */
const create = (boardData) => boardsRepo.create(boardData);

/**
 * Get board by ID
 * @param {string} id - Board ID
 * @returns {Board} - Object of board
 */
const get = (id) => boardsRepo.get(id);

/**
 * Remove board by ID
 * @param {string} id - Board ID 
 * @returns {Board} - Object of board
 */
const remove = (id) => {    
    tasksRepo.clearTasksAfterDeletingBoard(id);
    return boardsRepo.remove(id);
};

/**
 * Update board by ID
 * @param {string} id - Board ID 
 * @param {object} boardData - Object of board's data
 * @returns {Board} - Object of board
 */
const update = (id, boardData) => boardsRepo.update(id, boardData);

module.exports = { 
    getAll,
    create,
    get,
    remove,
    update
 };
