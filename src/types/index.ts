import { Request } from "express";

export interface IRequest extends Request {
  originalUrl: string
}

export interface IColumn {
  title: string
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
  userId: string | null,
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