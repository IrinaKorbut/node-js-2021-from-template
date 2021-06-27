import { Board } from '../../resources/boards/board.model';
import { IBoard } from '../../types';

// export const boardDB: Board[] = [];

class BOARD_DB {
  _db: IBoard[];

  constructor() {
    this._db = [];
  }

  findMany(): IBoard[] {
    return this._db;
  }

  findOne(id: string): IBoard | 'NOT_FOUND' {
    const board = this._db.find(boardItem => boardItem.id === id);
    return  board || 'NOT_FOUND';
  }

  // eslint-disable-next-line class-methods-use-this
  create(dto: IBoard): IBoard {
    const newBoard = new Board(dto);
    return newBoard;
  }

  save(board: IBoard): IBoard {
    this._db.push(board)
    return board;
  }

  update(id: string, dto: IBoard): IBoard | 'NOT_FOUND' {
    const board = this.findOne(id);
    if (typeof(board) === 'object') {
      this._db[this._db.indexOf(board)] = { ...board, ...dto, id };
    }
    const updatedBoard = this.findOne(id);
    return updatedBoard || 'NOT_FOUND';
  }

  remove(id: string): 'DELETED' | 'NOT_FOUND' {
    const deletedBoard = this.findOne(id);
    if (deletedBoard !== 'NOT_FOUND') {
      this._db = this._db.filter(board => board.id !== id);
      return 'DELETED';
    }
    return 'NOT_FOUND'
  }
}

export const boardDB = new BOARD_DB;