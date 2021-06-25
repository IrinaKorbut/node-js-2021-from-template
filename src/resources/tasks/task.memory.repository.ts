import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';

const getAll = async (): Promise<Task[]> => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find({ where: {} });
  return tasks;
}

const get = async (id: string): Promise<Task | 'NOT_FOUND'> => {
  const taskRepository = getRepository(Task);
  const targetTask = await taskRepository.findOne(id);
  return targetTask || 'NOT_FOUND';
};

const create = async (taskData: Task, boardID: string): Promise<Task> => {
  const taskRepository = getRepository(Task);
  const newTaskData = { ...taskData  };
  newTaskData.boardId = boardID;
  const newTask = await taskRepository.create(newTaskData);
  const savedTask = await taskRepository.save(newTask);
  return savedTask;
};

const remove = async (id: string): Promise<'NOT_FOUND' | 'DELETED'> => {
  const taskRepository = getRepository(Task);
  const removedTask = await taskRepository.delete(id);
  if (removedTask.affected) return 'DELETED';
  return 'NOT_FOUND';
};

const update = async (id: string, taskData: Task): Promise<Task | 'NOT_FOUND'> => {
  const taskRepository = getRepository(Task);
  const updatedTask = await taskRepository.update(id, taskData);
  return updatedTask.raw;
};

const clearTasksAfterDeletingBoard = async (id: string): Promise<void> => {
  await getRepository(Task).delete({ boardId: id });
}

const updateTasksAfterDeletingUser = async (id: string): Promise<void> => {
  await getRepository(Task).update({ userId: id }, { userId: undefined })
};

export default {
  getAll,
  create,
  get,
  remove,
  update,
  clearTasksAfterDeletingBoard,
  updateTasksAfterDeletingUser,
};
