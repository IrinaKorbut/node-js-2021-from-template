import { v4 } from 'uuid';
import { ITask } from '../../types';

/**
 * Class to create a task object
 */
 export class Task implements ITask {  
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;

  /**
   * @param {object} taskData - Object of task's data
   */  
  constructor({
    id = v4(),
    title = 'title',
    order = 0,
    description = 'description task',
    userId = 'userID',
    boardId = 'boardId',
    columnId = 'columnId',
  } = {} as ITask) {

    /**
     * @type {string}
     */
    this.id = id;

    /**
     * @type {string}
     */
    this.title = title;

    /**
     * @type {number}
     */
    this.order = order;
    
    /**
     * @type {string}
     */
    this.description = description;

    /**
     * @type {string}
     */
    this.userId = userId;

    /**
     * @type {string}
     */
    this.boardId = boardId;

    /**
     * @type {string}
     */
    this.columnId = columnId;
  }    
}
