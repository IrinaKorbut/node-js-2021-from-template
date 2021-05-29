import { v4 } from 'uuid';
import { IBoard, IColumn } from '../../types';

export class Board implements IBoard {
  id: string;  
  title: string;
  columns: IColumn[];
  /**
   * @param {object} boardData - Object of board's data
   */
  constructor({ 
    id = v4(), 
    title = 'Title', 
    columns = [] 
  } = {} as IBoard) {
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
