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

const get = async (id) => {
  const targetTask = taskDB.find(task => task.id === id);
  return targetTask;
}

const remove = async (id) => {
  const task = await get(id);
  const taskIndex = taskDB.indexOf(task);
  return taskIndex > -1 ? taskDB.splice(taskIndex, 1) : null;
}

module.exports = { 
  getAll,
  create,
  get,
  remove,
 };
