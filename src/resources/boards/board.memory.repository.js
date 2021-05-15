const boardDB = require("../../common/dataBaseInMemory/boardDB");
const Board = require("./board.model");

const getAll = async () => boardDB;

const get = async (id) => {
  const targetBoard = boardDB.find(board => board.id === id);
  return targetBoard;
}

const create = async (boardData) => {
  const board = new Board(boardData);
  boardDB.push(board);
  return get(board.id);
}

const remove = async (id) => {
  const board = await get(id);
  const boardIndex = boardDB.indexOf(board);
  if (boardIndex > -1) {
    return boardDB.splice(boardIndex, 1);
  }  
  return null;
}

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