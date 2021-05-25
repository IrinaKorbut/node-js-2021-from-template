const boardDB = require("../../common/dataBaseInMemory/boardDB");
const Board = require("./board.model");

/**
 * @module boardMemoryRepo
 */

/**
 * Get all boards
 * @returns {Promise<Board[]>} - Promise with array of boards
 */
const getAll = async () => boardDB;

/**
 * Get board by ID
 * @param {string} id - Board ID
 * @returns {Promise<Board>} - Promise with board object
 */
const get = async (id) => {
  const targetBoard = boardDB.find(board => board.id === id);
  return targetBoard;
}

/**
 * Create board
 * @param {object} boardData - Object of board's data
 * @returns {Promise<Board>} - Promise with board object
 */
const create = async (boardData) => {
  const board = new Board(boardData);
  boardDB.push(board);
  return get(board.id);
}

/**
 * Remove user by ID
 * @param {string} id - Board ID
 * @returns {Promise<Board> | object} - Promise with board object or null
 */
const remove = async (id) => {
  const board = await get(id);
  const boardIndex = boardDB.indexOf(board);
  return boardIndex > -1 ? boardDB.splice(boardIndex, 1) : null;
}

/**
 * Update user by ID
 * @param {string} id - Board ID
 * @param {object} boardData - Object of board's data
 * @returns {Promise<Board>} - Promise with board object
 */
const update = async (id, boardData) => {
  const oldBoard = await get(id);
  boardDB[boardDB.indexOf(oldBoard)] = { ...oldBoard, ...boardData, id};
  return get(id);
}

module.exports = { 
  getAll,
  create,
  get,
  remove,
  update
 };