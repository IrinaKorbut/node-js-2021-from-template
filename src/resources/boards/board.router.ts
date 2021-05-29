import { Router, Request, Response } from 'express';
import boardsService from './board.service';
import { Board } from './board.model';

export const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards: Board[] = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req: Request, res: Response) => {
  const board: Board | null = await boardsService.create(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  const board: Board | null = await boardsService.get(String(id));
  if (board) {
    res.status(200).json(board);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted: Board | null = await boardsService.remove(String(id));
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  const board: Board | null = await boardsService.update(String(id), req.body);
  res.status(200).json(board);
});
