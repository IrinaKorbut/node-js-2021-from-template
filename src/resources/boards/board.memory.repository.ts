import { boardDB } from '../../common/dataBaseInMemory/boardDB';
import { Board } from './board.model';
import { IBoard } from '../../types/index';

const getAll = async (): Promise<Board[]> => boardDB;

const get = async (id: string ): Promise<Board | null> => {
  const targetBoard = await boardDB.find((board) => board.id === id);
  return targetBoard || null;
};

const create = async (boardData: IBoard): Promise<Board | null> => {
  const board = new Board(boardData);
  boardDB.push(board);
  const newBoard = await get(board.id);
  return  newBoard || null;
};

const remove = async (id: string ): Promise<Board | null> => {
  const board = await get(id);
  let boardIndex = -1;
  if (board) {
    boardIndex = boardDB.indexOf(board);
  }
  const removedBoard = boardDB.splice(boardIndex, 1)[0];
  return removedBoard || null;
};

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
