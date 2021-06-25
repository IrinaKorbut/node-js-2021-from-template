import { Request } from "express";

export interface IRequest extends Request {
  originalUrl: string
}

export interface ICustomError extends Error {
  status: number;
  message: string;
}

export interface IColumn {
  idColumn: string;
  title: string;
  order: number;
}
export interface IBoard {
  id: string,
  title: string,
  columns: IColumn[]
}

export interface ITask {
  id: string,
  title: string,
  order: number,
  description: string,
  userId: string,
  boardId: string,
  columnId: string,
}

export interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}

export interface IUserWithoutPassword {
  id: string,
  name: string,
  login: string
}

export type UserDTO = Omit <IUser, 'id'>;