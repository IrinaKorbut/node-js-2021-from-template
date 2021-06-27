import boardsRepo from './board.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
import { Board } from '../../entities/board';

const getAll = (): Promise<Board[]> => boardsRepo.getAll();

const create = (boardData: Board): Promise<Board> => boardsRepo.create(boardData);

const get = (id: string ): Promise<Board | 'NOT_FOUND'> => boardsRepo.get(id);

const remove = async (id: string ): Promise<'NOT_FOUND' | 'DELETED'>  => {
  await tasksRepo.clearTasksAfterDeletingBoard(id);
  return boardsRepo.remove(id);
};

const update = (id: string , boardData: Board): Promise<Board | 'NOT_FOUND'> => boardsRepo.update(id, boardData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
