import { v4 } from 'uuid';
import { ITask } from '../../types';

 export class Task implements ITask {  
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
 
  constructor({
    id = v4(),
    title = 'title',
    order = 0,
    description = 'description task',
    userId = 'userID',
    boardId = 'boardId',
    columnId = 'columnId',
  } = {} as ITask) {
    this.id = id;
    this.title = title;
    this.order = order;  
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }    
}
