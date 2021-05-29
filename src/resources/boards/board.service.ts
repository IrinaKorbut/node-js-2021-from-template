import boardsRepo from './board.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
import { Board } from './board.model';
import { IBoard } from '../../types/index';

/**
 * @module boardService
 */

/**
 * Get all boards
 * @returns {Board[]} - Array of boards
 */
const getAll = (): Promise<Board[]> => boardsRepo.getAll();

/**
 * Create board
 * @param {object} boardData - Object of board's data
 * @returns {Board} - Object of board
 */
const create = (boardData: IBoard): Promise<Board | null> => boardsRepo.create(boardData);

/**
 * Get board by ID
 * @param {string} id - Board ID
 * @returns {Board} - Object of board
 */
const get = (id: string ): Promise<Board | null> => boardsRepo.get(id);

/**
 * Remove board by ID
 * @param {string} id - Board ID
 * @returns {Board} - Object of board
 */
const remove = (id: string ): Promise<Board | null>  => {
  tasksRepo.clearTasksAfterDeletingBoard(id);
  return boardsRepo.remove(id);
};

/**
 * Update board by ID
 * @param {string} id - Board ID
 * @param {object} boardData - Object of board's data
 * @returns {Board} - Object of board
 */
const update = (id: string , boardData: IBoard): Promise<Board | null> => boardsRepo.update(id, boardData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
