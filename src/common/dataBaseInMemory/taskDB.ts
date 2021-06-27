import { Task } from '../../resources/tasks/task.model';
import { ITask } from '../../types';

class TASK_DB {
  _db: ITask[];

  constructor() {
    this._db = [];
  }

  findMany(): ITask[] {
    return this._db;
  }

  findOne(id: string): ITask | 'NOT_FOUND' {
    const task = this._db.find(taskItem => taskItem.id === id);
    return  task || 'NOT_FOUND';
  }

  // eslint-disable-next-line class-methods-use-this
  create(dto: ITask): ITask {
    const newTask = new Task(dto);
    return newTask;
  }

  save(task: ITask): ITask {
    this._db.push(task)
    return task;
  }

  update(id: string, dto: ITask): ITask | 'NOT_FOUND' {
    const task = this.findOne(id);
    if (typeof(task) === 'object') {
      this._db[this._db.indexOf(task)] = { ...task, ...dto, id };
    }
    const updatedTask = this.findOne(id);
    return updatedTask || 'NOT_FOUND';
  }

  delete(id: string): 'DELETED' | 'NOT_FOUND' {
    const deletedTask = this.findOne(id);
    if (deletedTask !== 'NOT_FOUND') {
      this._db = this._db.filter(task => task.id !== id);
      return 'DELETED';
    }
    return 'NOT_FOUND'
  }
}

export const taskDB = new TASK_DB();