import boardsRepo from './board.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
import { Board } from './board.model';
import { IBoard } from '../../types/index';

const getAll = (): Promise<Board[]> => boardsRepo.getAll();

const create = (boardData: IBoard): Promise<Board | null> => boardsRepo.create(boardData);

const get = (id: string ): Promise<Board | null> => boardsRepo.get(id);

const remove = (id: string ): Promise<Board | null>  => {
  tasksRepo.clearTasksAfterDeletingBoard(id);
  return boardsRepo.remove(id);
};

const update = (id: string , boardData: IBoard): Promise<Board | null> => boardsRepo.update(id, boardData);

export default {
  getAll,
  create,
  get,
  remove,
  update,
};
