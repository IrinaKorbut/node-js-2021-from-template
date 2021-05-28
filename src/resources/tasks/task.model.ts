const uuid = require('uuid').v4;
/**
 * Class to create a task object
 */
class Task {
  /**
   * @param {object} taskData - Object of task's data 
   */
  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description task',
    userId = 'userID',
    boardId = 'boardId',
    columnId = 'columnId',
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

module.exports = Task;
