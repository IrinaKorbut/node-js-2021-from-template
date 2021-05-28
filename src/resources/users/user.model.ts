const uuid = require('uuid').v4;

/**
 * Class to create a user object
 */
class User {
  /**
   * @param {object} userData - Object of user's data 
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
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
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
