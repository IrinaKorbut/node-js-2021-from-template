import { User } from "../../resources/users/user.model";

/**
 * User object definition
 * @typedef {object} User
 * @property {string} id - User ID
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User password
 */

/**
 * @type {User[]}
 */
export const userDB: User[] = [];