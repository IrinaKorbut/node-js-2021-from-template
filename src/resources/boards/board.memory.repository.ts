import { boardDB } from '../../common/dataBaseInMemory/boardDB';
import { Board } from './board.model';
import { IBoard } from '../../types/index';

/**
 * @module boardMemoryRepo
 */

/**
 * Get all boards
 * @returns {Promise<Board[]>} - Promise with array of boards
 */
const getAll = async (): Promise<Board[]> => boardDB;

/**
 * Get board by ID
 * @param {string} id - Board ID
 * @returns {Promise<Board>} - Promise with board object
 */
const get = async (id: string ): Promise<Board | null> => {
  const targetBoard = await boardDB.find((board) => board.id === id);
  return targetBoard || null;
};

/**
 * Create board
 * @param {object} boardData - Object of board's data
 * @returns {Promise<Board>} - Promise with board object
 */
const create = async (boardData: IBoard): Promise<Board | null> => {
  const board = new Board(boardData);
  boardDB.push(board);
  const newBoard = await get(board.id);
  return  newBoard || null;
};

/**
 * Remove user by ID
 * @param {string} id - Board ID
 * @returns {Promise<Board> | object} - Promise with board object or null
 */
const remove = async (id: string ): Promise<Board | null> => {
  const board = await get(id);
  let boardIndex = -1;
  if (board) {
    boardIndex = boardDB.indexOf(board);
  }
  const removedBoard = boardDB.splice(boardIndex, 1)[0];
  return removedBoard || null;
};

/**
 * Update user by ID
 * @param {string} id - Board ID
 * @param {object} boardData - Object of board's data
 * @returns {Promise<Board>} - Promise with board object
 */
const update = async (id: string , boardData: IBoard): Promise<Board | null> => {
  const oldBoard = await get(id);
  if (oldBoard) {
    boardDB[boardDB.indexOf(oldBoard)] = { ...oldBoard, ...boardData, id };
  }
  const updatedBoard = await get(id);
  return updatedBoard;
};

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
