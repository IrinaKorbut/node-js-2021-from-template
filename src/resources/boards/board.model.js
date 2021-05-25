const uuid = require('uuid').v4;

class Board {
  /**
   * @param {object} boardData - Object of board's data 
   */
  constructor({
    id = uuid(),
    title = 'Title',
    columns  = []
  } = {}) {
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

module.exports = Board;
