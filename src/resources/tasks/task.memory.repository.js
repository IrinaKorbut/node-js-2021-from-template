const taskDB = require('../../common/dataBaseInMemory/taskDB');
const Task = require('./task.model');

const getAll = async () => taskDB;

const create = async (boardId, taskData) => {
  const taskDataDuplicate = { ...taskData }
  taskDataDuplicate.boardId = taskData.boardId ? taskData.boardId : boardId;
  const task = new Task(taskDataDuplicate);
  taskDB.push(task);
  return task;
}

module.exports = { 
  getAll,
  create,
 };
