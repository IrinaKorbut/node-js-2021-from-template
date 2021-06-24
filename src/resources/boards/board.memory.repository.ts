import { getRepository } from 'typeorm';
import { Board } from '../../entities/board';

const getAll = async (): Promise<Board[]> => getRepository(Board).find({ where: {} });

const get = async (id: string ): Promise<Board | 'NOT_FOUND'> => {
  const targetBoard = await getRepository(Board).findOne(id);
  return targetBoard || 'NOT_FOUND';
};

const create = async (boardData: Board): Promise<Board> => {
  const newBoard = await getRepository(Board).create(boardData);
  const savedBoard = await getRepository(Board).save(newBoard);
  return  savedBoard;
};

const remove = async (id: string ): Promise<'NOT_FOUND' | 'DELETED'> => {
  const removeBoard = await getRepository(Board).delete(id);
  if (removeBoard.affected) return 'DELETED';
  return 'NOT_FOUND';
};

const update = async (id: string , boardData: Board): Promise<Board | 'NOT_FOUND'> => {
  const updatedBoard = await getRepository(Board).update(id, boardData);
  return  updatedBoard.raw;
};

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
