import { v4 } from 'uuid';
import { IUser, IUserWithoutPassword } from '../../types/index';

// const uuidV4 = uuid.v4;

/**
 * Class to create a user object
 */
export class User {
  id: string;
  name: string;
  login: string;
  password: string;

  /**
   * @param {object} userData - Object of user's data
   */
  constructor({
    id = v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {} as IUser) {
    /**
     * @type {string}
     */
    this.id = id;
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {string}
     */
    this.login = login;
    /**
     * @type {string}
     */
    this.password = password;
  }

  /**
   * Delete password from user's object
   * @param {object} user - Object with user's data
   * @returns {object} - User object without password
   */
  static toResponse(user: User): IUserWithoutPassword {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
