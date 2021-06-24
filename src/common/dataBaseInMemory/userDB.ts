import { User } from "../../resources/users/user.model";
import { IUser } from '../../types';

class USER_DB {
  _db: IUser[];

  constructor() {
    this._db = []
  }

  findMany(): Omit <IUser[], 'password'> {
    return this._db;
  }

  findOne(id: string): IUser | 'NOT_FOUND' {
    const user = this._db.find(userItem => userItem.id === id);
    return user || 'NOT_FOUND';
  }

  // eslint-disable-next-line class-methods-use-this
  create(dto: IUser): IUser {
     const newUser = new User(dto);
     return newUser;
  }

  save(user: IUser): IUser {
    this._db.push(user)
    return user;
  }

  update(id: string, dto: Omit <IUser, 'id'>): IUser | 'NOT_FOUND' {
    const user = this.findOne(id);
    if (typeof(user) === 'object') {
      this._db[this._db.indexOf(user)] = { ...user, ...dto, id };
    }
    const updatedUser = this.findOne(id);
    return updatedUser || 'NOT_FOUND';
  }

  delete(id: string): 'DELETED' | 'NOT_FOUND' {
    const deletedUser = this.findOne(id);
    if (deletedUser !== 'NOT_FOUND') {
      this._db = this._db.filter(user => user.id !== id);
      return 'DELETED';
    }
    return 'NOT_FOUND'
  }
}

export const userDB = new USER_DB();