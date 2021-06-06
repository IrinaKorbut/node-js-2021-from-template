import { v4 } from 'uuid';
import { IBoard, IColumn } from '../../types';

export class Board implements IBoard {
  id: string;  
  title: string;
  columns: IColumn[];
  
  constructor({ 
    id = v4(), 
    title = 'Title', 
    columns = [] 
  } = {} as IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }  
}
