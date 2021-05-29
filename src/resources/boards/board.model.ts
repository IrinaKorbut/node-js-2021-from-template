import uuid from 'uuid';
import { IBoard, IColumn } from '../../types';

const uuidV4 = uuid.v4;

export class Board implements IBoard {
  id: string;  
  title: string;
  columns: IColumn[];
  /**
   * @param {object} boardData - Object of board's data
   */
  constructor({ id = uuidV4(), title = 'Title', columns = [] } = {} as IBoard) {
    /**
     * @type {string}
     */
    this.id = id;
    /**
     * @type {string}
     */
    this.title = title;
    /**
     * @type {string}
     */
    this.columns = columns;
  }  
}
