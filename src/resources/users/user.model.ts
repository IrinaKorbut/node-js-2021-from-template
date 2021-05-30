import { v4 } from 'uuid';
import { IUser, IUserWithoutPassword } from '../../types/index';

export class User {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({
    id = v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {} as IUser) {    
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): IUserWithoutPassword {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
