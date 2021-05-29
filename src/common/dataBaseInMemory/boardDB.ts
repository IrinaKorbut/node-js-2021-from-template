import { Board } from '../../resources/boards/board.model';

/**
 * Board object definition
 * @typedef {object} Board
 * @property {string} id - Board ID
 * @property {string} title - Board title
 * @property {array} columns - Board columns
 */

/**
 * @type {Board[]}
 */
 export const boardDB: Board[] = [];
